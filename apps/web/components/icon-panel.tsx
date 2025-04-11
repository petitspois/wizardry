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
import {useIconContext} from "@/context/icon-context"
import * as Icons from 'wizardry-react';
import {getComponentName, capitalize, getVersion} from "@/lib/utils";
import {RainbowButton} from "@/components/magicui/rainbow-button";

export function IconPanel() {
  const {activeIcon, activeCategory, resetActiveIcon} = useIconContext()

  const isOpen = React.useMemo(() => {
    return activeIcon?.name !== undefined && activeCategory !== undefined
  }, [activeIcon])

  const handleOpenChange = React.useCallback((open: boolean) => {
    if (!open) {
      resetActiveIcon()
    }
  }, [])

  console.log(activeIcon)

  if (!isOpen) return;

  const componentName = getComponentName(activeIcon?.name as string)
  const IconComponent = Icons[componentName as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <Drawer open={isOpen} onOpenChange={handleOpenChange}>
      <DrawerContent className="!rounded-none bg-foreground border-none">
        <div className="container-wrapper !border-0">
          <p className="text-background px-5 inline-flex items-center gap-2">
            {
              activeIcon?.tags.map((tag, index) => {
                return <>
                  {index===0 && <Icons.CircleOneFill className="w-1 h-1" style={{transform: `rotate(${Math.random() * 360}deg)`}} />}
                        <span key={tag}>{tag}</span>
                        <Icons.CircleOneFill className="w-1 h-1" style={{transform: `rotate(${Math.random() * 360}deg)`}} />
                </>
              })
            }
          </p>
          <div className="container py-6 space-y-4 h-[300px] flex gap-4">
            <div className={'bg-background size-[100px] rounded-lg flex items-center justify-center'}>
              <IconComponent className="size-10"/>
            </div>
            <div>
              <div className="text-background flex flex-col gap-2">
                <h4 className=" text-xl">{capitalize(activeCategory)}</h4>
                <p className={'opacity-85'}>{activeIcon?.name}</p>
                <RainbowButton>{getVersion(activeIcon?.version as string)}</RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
