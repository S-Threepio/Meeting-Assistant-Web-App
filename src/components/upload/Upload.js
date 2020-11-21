import React, { Component } from 'react'
import { uploadFile } from 'react-s3';
import '../upload/Upload.css'
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import aws from '../../data/aws.json';

const config = {
    bucketName: 'aws-transcribe-mssda-test-dev-records',
    region: 'us-east-1',
    accessKeyId: aws.aws_access_key_id,
    secretAccessKey: aws.aws_secret_access_key,
}

class Upload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            isUploading: false
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        this.props.setTitle("Upload Your Recording")
    }

    onFileChange(event) {
        console.log(event.target.files[0])
        this.setState({ selectedFile: event.target.files[0] });
    }

    onFileUpload() {
        this.setState({ isUploading: true });
        uploadFile(this.state.selectedFile, config)
            .then(data => {
                console.log(data)
                this.setState({ isUploading: false })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (this.state.isUploading ? <div className="Upload">
            <div className="Loading">
                <Loader type="ThreeDots" color="#2BAD60" />
            </div ></div> : <div className="Upload">
                <input className="Input" type="file" onChange={this.onFileChange} />
                <button className="Submit" variant="primary" onClick={this.onFileUpload}>
                    Upload File
                </button>
            </div>
        )
    }
}

export default Upload
