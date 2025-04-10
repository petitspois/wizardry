"use client"
import * as React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import {Button} from "@/components/ui/button"
import { useIconContext } from "@/context/icon-context"

export function IconPanel() {
    const { activeIcon, activeCategory, resetActiveIcon } = useIconContext()
    const isOpen = React.useMemo(() => {
        return activeIcon?.name !== undefined && activeCategory !== undefined
    }, [activeIcon])

    const handleOpenChange = React.useCallback((open: boolean) => {
        if(!open){
            resetActiveIcon()
        }
    }, [])

    return (
        <Drawer open={isOpen} onOpenChange={handleOpenChange}>
            <DrawerContent className="!rounded-none bg-transparent backdrop-blur">
                <div className="container-wrapper">
                    <div className="container py-6 space-y-4 h-[300px]">
                        12321321312
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
