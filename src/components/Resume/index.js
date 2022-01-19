import React from 'react';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import resume from "../../assets/Keith-Resume.pdf";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { PdfContainer, ResumeBtn } from './ResumeElements';


const ResumePage = () => {
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    return (
        <PdfContainer>
          <ResumeBtn>
              <DownloadButton />
          </ResumeBtn>
          <Viewer plugins={[getFilePluginInstance]} defaultScale={SpecialZoomLevel.PageFit} fileUrl={resume} />
        </PdfContainer>
    )
}

export default ResumePage
