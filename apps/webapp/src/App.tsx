import './App.css';
import ParticlesBackground from './ParticlesBackground';
import * as React from "react";

function App() {
    return (
        <div dir="rtl" className="w-full h-full flex-col relative bg-dark p-10 box-border">
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <ParticlesBackground/>
            </div>
            <div className="text-white w-full h-full grid grid-cols-2 grid-rows-2">
                <div className="px-2">
                    <div
                        className="p-4 flex flex-col gap-4 border border-[#ffffff33] border-e-solid border-e-[0.2rem] h-full box-border">
                        <FloorRow floor="קומה 1"/>
                        <OfficeRow text="פליי דנט" postfix={100}/>
                        <OfficeRow text="מבחני תאוריה - אנקורי" postfix={101}/>
                    </div>
                </div>
                <div className="px-2">
                    <div className="p-4 flex flex-col gap-4">
                        <FloorRow floor="קומה 2"/>
                        <OfficeRow text="וי.אי.פי. לוקס טרוול" postfix={'200-203'}/>
                        <OfficeRow text="אתי והדס" postfix={204}/>
                        <OfficeRow text="אפרים מנגד" postfix={205}/>
                        <OfficeRow text="ICL" postfix={206}/>
                    </div>
                </div>
                <div className="px-2">
                    <div
                        className="p-4 flex flex-col gap-4 border border-[#ffffff33] border-e-solid border-e-[0.2rem] h-3/4 box-border">
                        <FloorRow floor="קומה 3"/>
                        <OfficeRow text="גילרון" postfix={300}/>
                        <OfficeRow text="גלובל שארק" postfix={303}/>

                    </div>
                </div>
                <div className="px-2">
                    <div className="p-4 flex flex-col gap-4">
                        <FloorRow floor="קומה 4"/>
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
        <div className="text-5xl fw-900 bg-amber p-2 flex-1">
            {props.text}
        </div>
        {props.postfix && <div className="text-5xl fw-900 bg-white p-2 text-amber flex justify-center items-center">
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
