import React from "react";

const timelineData = [
    {
        date: "11 Oct 23",
        events: [
            {
                label: "Proposal Sent",
                time: "05:30 PM",
                status: "Discussion Done",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                followUp: "11 Oct 23 10:30 AM",
                by: "Bhimkumar Prasad"
            },
            {
                label: "Interested",
                time: "02:30 PM",
                status: "Discussion Done",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                followUp: "11 Oct 23 10:30 AM",
                by: "Bhimkumar Prasad"
            }
        ]
    },
    {
        date: "7 Oct 23",
        events: [
            {
                label: "Proposal Sent",
                time: "05:30 PM",
                status: "Discussion Done",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                followUp: "11 Oct 23 10:30 AM",
                by: "Bhimkumar Prasad"
            },
            {
                label: "Interested",
                time: "02:30 PM",
                status: "Discussion Done",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                followUp: "11 Oct 23 10:30 AM",
                by: "Bhimkumar Prasad"
            }
        ]
    }
];

const Timeline = () => {
    return (
        <div className="space-y-4">
            {timelineData.map((group) => (
                <div key={group.date}>
                    <div>
                        <h3 className="text-center font-bold text-base text-gray-700 mb-1">
                            {group.date}
                        </h3>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="space-y-4">
                            {group.events.map((event, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="text-right w-28 shrink-0">
                                        <p className="font-medium text-sm">{event.label}</p>
                                        <p className="text-xs text-gray-500">{event.time}</p>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-gray-300">
                                        <div className="absolute left-[-7px] top-0 w-3 h-3 bg-black rounded-full"></div>
                                        <p className="font-medium text-sm">{event.status}</p>
                                        <p className="text-xs text-gray-600">{event.description}</p>
                                        <p className="text-xs text-gray-500 ">
                                            Follow Up : {event.followUp}
                                            <br /><span className="flex font-medium justify-end pt-0.5">-{event.by}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
