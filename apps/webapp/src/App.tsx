import './App.css';
import Header from './ParticlesBackground';
import * as React from "react";

function App() {
  return (
    <div dir="rtl" className="w-full h-full flex-col relative bg-dark p-10 box-border">
      <Header />
      <div className="flex flex-row text-white w-full flex-1">
        <div className="flex flex-1 flex-col">
          <div className="px-2">
            <div
              className="p-4 flex flex-col gap-4 h-full box-border">
              <FloorRow floor="קומה 1" />
              <OfficeRow text="טופ מדיקל קליניק" postfix={100} />
              <OfficeRow text="מבחני תאוריה - אנקורי" postfix={102} />
            </div>
          </div>
          <div className="px-2">
            <div className="p-4 flex flex-col gap-4">
              <FloorRow floor="קומה 2" />
              <OfficeRow text="וי.אי.פי. לוקס טרוול" postfix={'200-202'} />
              <OfficeRow text="י. פק-ליס שירותי ליסנג ורכב" postfix={201} />
              <OfficeRow text="דדוש & בן ארויה חברת רואי חשבון" postfix={204} />
              <OfficeRow text="אפרים מנגד רואה חשבון" postfix={205} />
              <OfficeRow text="ICL - Israel Cargo Logistics" postfix={206} />
            </div>
          </div>
        </div>
        <div className='w-[2vw] h-full bg-white' />
        <div className="flex flex-col flex-1">
          <div className="px-2">
            <div
              className="p-4 flex flex-col gap-4 border h-3/4 box-border">
              <FloorRow floor="קומה 3" />
              <OfficeRow text="GILRON - Customs & Logistics" postfix={300} />
              <OfficeRow text="אדי שרותי מכס ונמל" postfix={300} />
              <OfficeRow text={`פוד הצלחה ושפע בע"מ`} postfix={301} />
              <OfficeRow text="גלובל שארק" postfix={302} />
              <OfficeRow text="נירן אוזן - הנדסת מבנים" postfix={303} />
              <OfficeRow text="אושן לינק - שילוח בינלאומי" postfix={304} />

            </div>
          </div>
          <div className="px-2">
            <div className="p-4 flex flex-col gap-4">
              <FloorRow floor="קומה 4" />
              <OfficeRow text="Nest Roof" postfix={'מרפסת'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ExamRowProps = {
  text: string;
  postfix?: React.ReactNode;
}
const OfficeRow = (props: ExamRowProps) => {
  return <div className="flex w-full">
    <div className="text-5xl fw-900 bg-brand p-2 flex-1">
      {props.text}
    </div>
    {props.postfix && <div className="text-5xl fw-900 bg-white p-2 text-brand flex justify-center items-center">
      {props.postfix}
    </div>}
  </div>
};

type FloorRowProps = {
  floor: string;
}
const FloorRow = (props: FloorRowProps) => {
  return <div className="text-5xl fw-500">{props.floor}</div>;
};

export default App;
