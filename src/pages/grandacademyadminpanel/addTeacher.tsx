import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
} from '@chakra-ui/react'
import { doc, setDoc } from 'firebase/firestore';
import { Context } from '../_app';
import { memo, useContext, useState } from 'react';

function AddTeacher() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { db } = useContext(Context)

    const [ teachName, setCourseName ] = useState("")
    const [ surename, setTime ] = useState("")
    const [ login, setPrice ] = useState("")
    const [ tel, setTeacher ] = useState("")

    const addCourse = async () => {
        if (teachName) {
            const coursesRef = doc(db, 'teachers', `${teachName}`);
            await setDoc(coursesRef, { 
                teachName,
                surename,
                login,
                tel
            }, { merge: true });
        }
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen}>O'qituvchi qo'shish</Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"#4E4E4E"} >
                    <ModalHeader>O'qituvchi qo'shish</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box display={"flex"} flexDirection={"column"} gap={"12px"} >
                            <Input value={teachName} onChange={e => setCourseName(e.target.value)} px={"70px"} variant={"filled"} placeholder="Ismi..." />
                            <Input value={surename} onChange={e => setTime(e.target.value)} px={"70px"} variant={"filled"} placeholder="Familiyasi..." />
                            <Input value={login} onChange={e => setPrice(e.target.value)} px={"70px"} variant={"filled"} placeholder="Kirish uchun login..." />
                            <Input value={tel} onChange={e => setTeacher(e.target.value)} px={"70px"} type='number' variant={"filled"} placeholder="Telefon raqami..." />
                        </Box>
                    </ModalBody>
        
                    <ModalFooter>
                        <Button onClick={addCourse} mt={"10px"} bg={"#EF8354"} _hover={{bg: "#EF8329"}} >Qo'shish</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default memo(AddTeacher)