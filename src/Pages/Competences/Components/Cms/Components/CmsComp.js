import React from 'react';
import ProgressBar from 'react-animated-progress-bar'

export default function CmsComp(){
    return(
        <div className="font-normal pt-2 text-sm text-left text-gray-100">
            <div>
                <label className="text-lg font-bold text-gray-200">Prestashop:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="70"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div>
                <label className="text-lg font-bold text-gray-200">Wordpress:</label>
                <ProgressBar
                    paddingTop="-20px"
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="68"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div>
                <label className="text-lg font-bold text-gray-200">Drupal:</label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="45"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="#333333"
                    trackBorderColor="grey"
                />
            </div>
            <div className="space-y-0">
                <label className="text-lg pb-12 font-bold text-gray-200">
                    Jomla:
                </label>
                <ProgressBar
                    width="100%"
                    height="10px"
                    rect
                    fontColor="white"
                    percentage="50"
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    bgColor="red"
                    trackBorderColor="grey"
                />
            </div>
        </div>
    )
}