import { abbreviateNumber } from 'js-abbreviation-number';
import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillCheckCircleFill} from "react-icons/bs";
import VideoLength from '../shared/videoLength';

const VideoCard = ({video}) => {
    return (
            <Link to={`/video/${video?.videoId}`}>
                <div className="flex flex-col mb-8">
                    <div className=" relative h-48 md:h-40 md:rounded-xl overflow-hidden">
                       <img 
                       className="h-full w-full object-cover"
                       src={video?.thumbnails?.[0]?.url} alt='' />

                       {video?.lengthSeconds && (<VideoLength time={video?.lengthSeconds}/>)}

                    </div>
                    <div className="flex text-white mt-3">
                        <div className="flex items-start">
                            <div className="flex h-9 w-9  overflow-hiddden">
                                <img 
                                className="h-full w-full object-cover rounded-full"
                                src={video?.author?.avatar[0]?.url} alt='' />
                            </div>
                        </div>
                        <div className="flex flex-col ml-3 overflow-hidden">
                            <span className="text-sm font-bold line-clamp-2 ">
                                {video?.title}
                            </span>
                            <span className="flex items-center text-[12px] font-semibold mt-2 text-white/[0.7] ">
                                {video?.author?.title}
                                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className="text-white/[0.7] ml-1 text-[12px]" />)}
                            </span>
                            <div className="flex text-[13px] font-semibold text-white/[0.7] truncate overflow-hidden]">
                                <span>
                                    {`${abbreviateNumber (video?.stats?.views,2)} views`}
                                </span>
                                <span className="flex text-[14px] loading-none font-bold text-white/[0.7] relative top-[-4px] mx-1">
                                    .
                                    </span>
                                <span className="truncte">
                                    {video?.publishedTimeText}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
       
    );
};

export default VideoCard;