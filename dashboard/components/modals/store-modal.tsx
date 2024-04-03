"use client";

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const StoreModal = useStoreModalStore();

    return(
    <Modal
        title="Create Store"
        description="add new store to manage products and categories"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}
    >
        Future create store form
    </Modal>
    );
};