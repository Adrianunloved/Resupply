"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface alertModalProps {
    isOpen: boolean;
    onClose: ()=> void;
    onConfirm: ()=> void;
    loading: boolean;
}

export const AlertModal: React.FC<alertModalProps>=({
isOpen,
onClose,
onConfirm,
loading
}) =>
{
    const[isMounted,SetisMounted] = useState(false);

    useEffect(()=>{
        SetisMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return(
        <Modal
        title="Are you sure?"
        description="This CANNOT be UNDONE."
        isOpen={isOpen}
        onClose={onClose}
        >
            <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled = {loading} variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button disabled = {loading} variant="destructive" onClick={onConfirm}>
                    Continue 
                </Button>
            </div>

        </Modal>
    )
}