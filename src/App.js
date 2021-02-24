import React, { useState } from 'react'
import TrackerUpload from './TrackerUpload';
import SettingsForm from './SettingsForm';
import PreviewMap from './PreviewMap';
import { useInput, useCheckInput } from './hooks/useInput';

function App() {
    let currDate = new Date();
    const { value:dateStart, bind:bindDateStart } = useInput(currDate.toISOString().substr(0,10));
    const { value:timeStart, bind:bindTimeStart } = useInput("00:00");
    const { value:dateEnd, bind:bindDateEnd } = useInput(currDate.toISOString().substr(0,10));
    const { value:timeEnd, bind:bindTimeEnd } = useInput("23:59");
    const { value:capability, bind:bindCapability } = useInput("FMV");
    const { value:unitSupported, bind:bindUnitSupported } = useInput("BCT");
    const { value:timezoneExcel, bind:bindTimezoneExcel } = useInput('Local');
    const { value:showAssets, bind:bindShowAssets } = useCheckInput(true);
    // const { value:showPIR, bind:bindShowPIR } = useCheckInput(false);
    const { value:showLocations, bind:bindShowLocations } = useCheckInput(true);
    const { value:timezoneHeatmap, bind:bindTimezoneHeatmap } = useInput('Local');
    const { value:opacityHeatmap, bind:bindOpacityHeatmap } = useInput('.5');

    const [ trackerData, setTrackerData ] = useState('')

    return (
        <div className="App font-body bg-gray-100">
            <div className=" bg-gray-800">
                <div className="text-2xl font-bold text-white px-3 pt-1">NTC ISR Heat Map Generator (IHMG)</div>
                <div className="text-xl font-bold text-white px-3 pb-1 text-opacity-60">V1.0.1</div>
            </div>
            <div className="content md:grid md:grid-cols-3 py-3 text-gray-600">
                <div className="md:col-span-1 px-4 flex flex-col">
                    <TrackerUpload setTrackerData={setTrackerData} />
                    <SettingsForm bindDateStart={bindDateStart} bindTimeStart={bindTimeStart} bindDateEnd={bindDateEnd}
                                  bindTimeEnd={bindTimeEnd} bindCapability={bindCapability}
                                  bindTimezoneExcel={bindTimezoneExcel} bindShowAssets={bindShowAssets}
                                  // bindShowPIR={bindShowPIR}
                                  bindTimezoneHeatmap={bindTimezoneHeatmap} bindOpacityHeatmap={bindOpacityHeatmap}
                                  bindShowLocations={bindShowLocations} bindUnitSupported={bindUnitSupported}
                                    dateStart={dateStart} dateEnd={dateEnd}/>
                </div>
                <div className="col-span-2 px-4">
                    <PreviewMap dateStart={dateStart} timeStart={timeStart} dateEnd={dateEnd} timeEnd={timeEnd}
                                capability={capability} timezoneExcel={timezoneExcel} showAssets={showAssets}
                                // showPIR={showPIR}
                                timezoneHeatmap={timezoneHeatmap}
                                trackerData={trackerData} opacityHeatmap={opacityHeatmap} showLocations={showLocations}
                                unitSupported={unitSupported}/>
                </div>

            </div>
        </div>
    );
}

export default App;
