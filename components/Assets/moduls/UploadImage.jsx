import { forwardRef } from 'react';

const UploadImage = forwardRef((props, ref) => {

    const handleChange = (e) => {
    
        let files = e.target.files;
        var allFiles = [];

        for (var i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => {
    
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: `${Math.round(file.size / 1000)} kB'`,
                    base64: reader.result,
                    file: file,
                };
        
                allFiles.push(fileInfo);
                
                if (allFiles.length == files.length) {
                    if(props.multiple) props.onDone(allFiles);
                    else props.onDone(allFiles[0]);
                }
            }
        }
    }

    return (
        <input className='pos-absolute cursor-pointer' style={{display: "none"}}
            onClick={props.onClick}
            accept="image/*"
            ref={ref}
            type="file"
            onChange={handleChange.bind(this)}
            multiple={props.multiple}>
        </input>
    )
})

UploadImage.displayName = "UploadImage";

export default UploadImage
    
UploadImage.defaultProps = {
    multiple: false,
};