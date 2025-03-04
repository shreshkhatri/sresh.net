import type { WithId, Document} from 'mongodb'

export interface CountrySelectorProps {
  country: CountryType | null;
  setCountry: (selectedCountry: CountryType | null) => void;
}

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}


export interface TypeExperience extends WithId<Document> {
  designation: string;
  startDate: string | null;
  endDate: string | null;
  employer: string;
  country: string;
  city: string;
  isContinue: boolean;
  duties_responsibilities: string[];
  achievements: string;
}

export interface TypeService extends WithId<Document> {
  title:string;
  description:string
}


export type TypeExperiences = {
  experiences:TypeExperience[]
}


export type TypeServices = {
  services:TypeService[]
}


export type cookiePreferenceProps = {
  essentialCookie: boolean;
  functionalCookie: boolean;
};

export type cookiePolicyProps = {
  reportCookieSelectionOptions: (
    cookiePreference: cookiePreferenceProps
  ) => void;
};

export type ResponseStatus = "success" | "error" | "null";

export type MainSnackBarProps = {
  open: boolean;
  setOpen: (success: boolean) => void;
  status: ResponseStatus;
  message: string;
};

export type userMessageType ={
  fname:string,
  lname:string,
  email:string,
  subject:string,
  userMessage:string
  country: CountryType | null;
  date: string
}


export type TypeLoginPayload = {
  username:string,
  password:string
}



  export type ImgsViewerProps = {
      [key: string]: any;
  }

 
  export interface MenusProps{
    menus: string[];
  }

  export interface MenuBarProps extends MenusProps {
    selectedMenuIndex:number,
    setSelectedMenuIndex:(index:number) => void
  }

  export type PropAssistantMessage = {
    message:string,
    date:Date|undefined
  }

  export type PropUserMessage = {
    message:string,
    date:Date|undefined
  }

  export type message={
    role:'user'|'assistant',
    content:string
  }

  export interface APIMessageObjects{
    messages:message[]
  }