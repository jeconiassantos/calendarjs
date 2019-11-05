type TouchesPosition = {
  clientX: number;
  clientY: number;
};

type Language = {
  daysWeek: string[];
  months: string[];
};

type Languages =
  | "deDE"
  | "enUS"
  | "esUS"
  | "filFIL"
  | "idID"
  | "inHI"
  | "jaJP"
  | "koKR"
  | "myMY"
  | "plPL"
  | "ptBR"
  | "ruRU"
  | "srRS"
  | "zhCN";

type LoadThemeParam = "Default" | "Night" | "Royale";

type CalendarContainer = {
  localDate: {
    currentDate: Date;
    currentYear: number;
    currentMonth: number;
    currentDay: number;
  };
  lang: {
    daysWeek: string[];
    months: string[];
  };
  containers: {
    eventsOfDate: {
      id: string;
      classes: {
        eventsOfDateShow: string;
      };
    };
  };
  ids: {
    calendarHeaderYear: string;
    calendarHeaderMonth: string;
  };
  classes: {
    calendarEvent: string;
    calendarHeader: string;
    calendarBody: string;
    calendarActionBefore: string;
    calendarActionAfter: string;
  };
  settings: {
    show: boolean;
    language: {
      active: Languages;
      available: Languages[];
    };
    theme: {
      active: LoadThemeParam;
      available: LoadThemeParam[];
    };
  };
};

type CalendarData = {
  name: string;
  date: string;
  time: string;
  author: string;
  link: string;
};

type MethodsPublic = {
  container: Function;
  data: Function;
  lang: Function;
  theme: Function;
  settings: Function;
  render: Function;
};

type calendarConfig = {
  name: string;
};

export {
  calendarConfig,
  MethodsPublic,
  CalendarContainer,
  TouchesPosition,
  CalendarData,
  Language,
  Languages
};