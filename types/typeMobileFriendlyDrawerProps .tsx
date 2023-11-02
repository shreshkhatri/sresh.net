// MobileFriendlyDrawerProps.tsx : the type for specifying opening and closing state of the drawer
export interface MobileFriendlyDrawerProps {
    open: boolean;
    setOpen: (newState: boolean) => void;
    menus:string[]
  }
  