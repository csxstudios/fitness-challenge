// import { Button } from 'react-bootstrap';
import { generateClient } from 'aws-amplify/api';

import { deleteFitnessModel } from '../graphql/mutations'
import { listFitnessModels } from '../graphql/queries'
import { Button, Text, Flex, Heading } from "@aws-amplify/ui-react";
import { useCallback, useEffect, useState } from 'react';
import { formatTime } from '../utils/format';

const FitnessList = () => {
    const client = generateClient();

    const [notes, setNotes] = useState([])

    const fetchNotes = useCallback(async () => {
        const result = await client.graphql({
            query: listFitnessModels,
        })
        setNotes(result.data.listFitnessModels.items)
    }, [setNotes])

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
        fetchNotes()
    }, [fetchNotes])

    useEffect(() => {
        fetchNotes()
    }, [fetchNotes])

    return (
        <>
            <Flex direction={"column"}>
            <Flex justifyContent={'space-between'}>
                <Heading level={1}>My notes</Heading>
            </Flex>
            {notes.map(note => <Flex alignItems={'center'}>
                <Text>{note.weekday}</Text>
                <Text>{formatTime(note.dateISO)}</Text>
                <Text>{note.user}</Text>
                <Text>{note.exercise}</Text>
                <Text>{note.count}</Text>
                <Button onClick={() => handleDeleteFitnessModel(note.id)}>Remove</Button>
            </Flex>)}
            <Button>Add Note</Button>
            {/* <Button onClick={handleCreateNote}>Add Note</Button> */}
        </Flex>
        </>
    );
}

export default FitnessList