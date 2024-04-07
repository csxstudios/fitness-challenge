import { AppContext } from '../providers/AppProvider';
import { Button, Form } from 'react-bootstrap';
import { generateClient } from 'aws-amplify/api';
import { formatTime } from '../utils/format';
import { parseDateISOString } from '../utils/dateFunctions';
import { getCurrentWeather } from '../utils/meterData';

import { createFitnessModel, deleteFitnessModel } from '../graphql/mutations'
import { listFitnessModels } from '../graphql/queries'
import { Text, Flex, Heading } from "@aws-amplify/ui-react";
import { useContext, useCallback, useEffect, useState } from 'react';

const FitnessCreateForm = () => {
    const client = generateClient();
    const appContext = useContext(AppContext);

    const defaultState = {
        count: 0,
        date: appContext.session.dateEpoch,
        dateISO: appContext.session.dateISO,
        month: appContext.session.month,
        weekday: appContext.session.weekday,
        year: appContext.session.year,
        user: appContext.user.username,
        exercise: 'pushups',
        label: 'Solo Leveling Fitness Challenge',
        temp: 0
    };

    console.log(defaultState);

    const [formState, setFormState] = useState(defaultState);
    const [currTemp, setCurrTemp] = useState();

    useEffect(() => {
        getCurrentWeather()
            .then((data) => {
                const temperature = data.current_weather.temperature;
                setCurrTemp(temperature);
                formState.temp = temperature;
            })
    }, [formState]);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formState);

        if (formState.count > 0) {
            const apiData = await client.graphql({
                query: createFitnessModel,
                variables: { input: formState },
            })
            alert("Fitness entry added.")
            window.location.reload(false);
        } else {
            alert("Reps or miles must be greater than 0.")
        }
    }

    const onChange = (e) => {
        const newState = formState;
        newState[e.target.name] = e.target.type === 'number' ? Number(e.target.value) : e.target.value;
        setFormState(newState);
    }

    const onChangeDate = (e) => {
        const newState = formState;
        const parseDate = parseDateISOString(e.target.value);
        newState["date"] = parseDate.dateEpoch;
        newState["dateISO"] = parseDate.dateISO;
        newState["month"] = parseDate.month;
        newState["weekday"] = parseDate.weekday;
        newState["year"] = parseDate.year;

        setFormState(newState);
    }

    // const handleCreateNote = useCallback(async () => {
    //     await client.graphql({
    //         query: createNote,
    //         variables: { input: { text: window.prompt("New note") } },
    //         authMode: 'AMAZON_COGNITO_USER_POOLS'
    //     })
    //     fetchNotes()
    // }, [fetchNotes])

    const handleDeleteFitnessModel = useCallback(async (id) => {
        await client.graphql({
            query: deleteFitnessModel,
            variables: { input: { id: id } }
        })
    })

    return (
        <>
            <h5>It's currently {formatTime(Date.now())} and {currTemp} °F.</h5>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formCount">
                    <Form.Label>Reps/Miles</Form.Label>
                    <Form.Control type="number" name="count" placeholder="Enter rep count or miles" onChange={onChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date &amp; Time</Form.Label>
                    <Form.Control type="datetime-local" name="dateISO" placeholder="Date Time" onChange={onChangeDate} defaultValue={formState.dateISO}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 d-none" controlId="formTemp">
                    <Form.Label>Farenheit</Form.Label>
                    <Form.Control type="number" name="temp" placeholder="Temp (F)" onChange={onChange} defaultValue={currTemp && currTemp}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formExercise">
                    <Form.Label>Exercise</Form.Label>
                    <Form.Select onChange={onChange} name="exercise" defaultValue="pushups">
                        <option>Select a location</option>
                        <option>pushups</option>
                        <option>dips</option>
                        <option>situps</option>
                        <option>squats</option>
                        <option>run</option>
                    </Form.Select>
                </Form.Group>
                <Button className="d-block mb-3" type="submit" variant="primary" onClick={onSubmit}>Add Fitness Entry</Button>
            </Form>
        </>
    );
}

export default FitnessCreateForm