// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const SettingsForm = ({bindDateStart, bindTimeStart, bindDateEnd, bindTimeEnd, bindCapability, bindTimezoneExcel,
                          bindShowAssets, bindShowPIR, bindTimezoneHeatmap, bindOpacityHeatmap, bindShowLocations,
                        bindUnitSupported, dateEnd, dateStart}) => {

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-auto mx-auto">
            <h3 className="text-primary-hover font-bold mb-4 text-lg">General Settings:</h3>

            <div className="-mx-3 mb-4 grid grid-cols-2">

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="date-start">
                        Date Start
                    </label>
                    <input {...bindDateStart} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="date-start" type="date" />
                </div>

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="time-start">
                        Time Start (Local)
                    </label>
                    <input {...bindTimeStart} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="time-start" type="time" />
                </div>

            </div>

            <div className="-mx-3 mb-4 grid grid-cols-2">

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2 " htmlFor="date-end">
                        Date End
                    </label>
                    <input {...bindDateEnd} className={"appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 " + ((dateEnd < dateStart) ? "border-red-500" : "")} id="date-end" type="date" />
                </div>

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="time-end">
                        Time End (Local)
                    </label>
                    <input {...bindTimeEnd} className={"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 " + ((dateEnd < dateStart) ? "border-red-500" : "")} id="time-end" type="time" />
                </div>
                {((dateEnd < dateStart) ? <div className="text-red-500 text-xs px-3 pt-0">Date Start must be before Date End</div> : "")}

            </div>

            <div className="-mx-3 mb-4">

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="capability">
                        Capability
                    </label>

                    <div className="relative mb-3">
                        <select {...bindCapability} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="capability" >
                            <option>FMV</option>
                            <option>SIGINT</option>
                            <option>GMTI</option>
                            <option>IMINT</option>
                        </select>

                        <div className="pointer-events-none absolute flex items-center px-2 text-grey-darker right-0 top-5">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                    </div>
                </div>

            </div>

            <div className="-mx-3 mb-4">

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="supported-unit">
                        Supported Unit
                    </label>

                    <div className="relative mb-3">
                        <select {...bindUnitSupported} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="capability" >
                            <option>BCT</option>
                            <option>AVN</option>
                            <option>SOF</option>
                            <option>DIV</option>
                            <option>OTHER</option>
                            <option>ALL UNITS</option>
                        </select>

                        <div className="pointer-events-none absolute flex items-center px-2 text-grey-darker right-0 top-5">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                    </div>
                </div>

            </div>

            <div className="-mx-3 mb-4">

                <div className="px-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="timezone-excel">
                        Timezone of imported Excel Tracker
                    </label>
                    <div className="relative">
                        <select {...bindTimezoneExcel} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="timezone-excel" >
                            <option>Local</option>
                            <option>Zulu</option>
                        </select>

                        <div className="pointer-events-none absolute flex items-center px-2 text-grey-darker right-0 top-5">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                    </div>
                </div>

            </div>

            <h3 className="text-primary-hover font-bold mb-4 mt-2 text-lg">Heatmap Display Settings:</h3>

            <div className="px-3 flex justify-between -mx-3 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="show-locations">
                    Show Location Names
                </label>
                <input {...bindShowLocations} className="block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="show-locations" type="checkbox" />
            </div>

            <div className="px-3 flex justify-between -mx-3 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="show-assets">
                    Show Assets
                </label>
                <input {...bindShowAssets} className="block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="show-assets" type="checkbox" />
            </div>

            {/*<div className="px-3 flex justify-between -mx-3 mb-4">*/}
            {/*    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="show-pir">*/}
            {/*        Show PIR*/}
            {/*    </label>*/}
            {/*    <input {...bindShowPIR} className="block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="show-pir" type="checkbox" />*/}
            {/*</div>*/}

            <div className="px-3 flex justify-between -mx-3 mb-4">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="opacity-heatmap">
                        Heatmap Opacity
                    </label>
                <datalist id="custom-list">
                    <option value=".1"> </option>
                    <option value=".2"> </option>
                    <option value=".3"> </option>
                    <option value=".4"> </option>
                    <option value=".5"> </option>
                    <option value=".6"> </option>
                    <option value=".7"> </option>
                    <option value=".8"> </option>
                    <option value=".9"> </option>
                    <option value="1"> </option>
                </datalist>
                <input {...bindOpacityHeatmap} type="range" min=".1" max="1" step=".1" id="opacity-heatmap"/>
            </div>

            <div className="px-3 -mx-3 mb-3">
                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="timezone-heatmap">
                        Heatmap Timezone
                    </label>
                    <div className="relative">
                        <select {...bindTimezoneHeatmap} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="timezone-heatmap" >
                            <option>Local</option>
                            <option>Zulu</option>
                        </select>

                        <div className="pointer-events-none absolute flex items-center px-2 text-grey-darker right-0 top-5">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>

                    </div>
                </div>

        </div>
    );
}

export default SettingsForm;