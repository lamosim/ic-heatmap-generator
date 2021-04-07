import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faCheck, faCog } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import XLSX from 'xlsx';

const TrackerUpload = ({ setTrackerData }) => {
    const [ fileName, setFileName ] = useState('');
    const [pending, setPending ] = useState(false)

    function handleFile(e) {
        setPending(true);
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, {type: 'array'});

            /* USE WORKBOOK */
            setTrackerData(tracker2arr(workbook.Sheets['TRACKER']));
            setFileName(f.name);
            setPending(false);
        };
        reader.readAsArrayBuffer(f);
    };

    function tracker2arr(sheet){
        var result = [];
        var row;
        var rowNum;
        var colNum;
        var range = XLSX.utils.decode_range(sheet['!ref']);
        for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
            row = [];
            for(colNum=range.s.c; colNum<=range.e.c; colNum++){
                var nextCell = sheet[
                    XLSX.utils.encode_cell({r: rowNum, c: colNum})
                    ];
                if( typeof nextCell === 'undefined' ){
                    row.push(void 0);
                } else row.push(nextCell.w);
            }
            if (row[0] !== void 0) {
                result.push(row);
            }
        }
        return result;
    };


    if(pending) {
        return(
            <div className="tracker-upload mx-auto w-auto">
                <div className="mx-auto flex flex-col items-center py-2 px-5 rounded-2xl border-2 bg-white shadow h-20 border-primary-hover flex justify-center items-center">

                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faCog} size='3x' className='text-primary-hover animate-spin' />
                        </div>

                </div>
            </div>
        )
    } if( fileName ) {
        return(
            <div className="tracker-upload mx-auto w-auto">
                <div className="mx-auto flex flex-col items-center py-2 px-5 rounded-2xl border-2 bg-white shadow h-20 border-primary-hover flex justify-center items-center">

                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faCheck} size='3x' className='text-primary-hover' />
                            <div className="text-center text-xs mt-2">
                                <div className="font-extrabold text-gray-500">
                                    {fileName}
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        ) } else {
        return (
            <div className="tracker-upload">
                <div className="mx-auto w-56 flex flex-col items-center p-3 border-dashed rounded-2xl border-2 bg-white transform hover:-translate-y-1 duration-300 hover:scale-105 shadow h-36 border-secondary-new flex justify-center items-center">
                    <div className="absolute">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faCloudUploadAlt} size='3x' className='text-secondary-new' />
                            <div className="flex flex-col text-center text-sm text-gray-600 mt-2">
                                <label htmlFor="file-upload" className="font-extrabold text-primary-hover">
                                    <span>Click to import Excel tracker</span>
                                </label>
                                <p className="pl-1 font-bold">or drag file here</p>
                            </div>
                        </div>
                    </div>
                    <input type="file" className="h-full w-full opacity-0" name="" onChange={handleFile} />
                </div>
            </div>
        )

    }
}

export default TrackerUpload;