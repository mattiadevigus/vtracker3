import { Component } from 'react';

import { Timeline, TimelineItem, TimelineSeparator, TimelineOppositeContent, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

class CardHistory extends Component {

    render = () => {
        return (
            <Timeline position="left" >
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Detected times by new Server:
                        <ul>
                            <li>Imola</li>
                            <li>Qualifing</li>
                        </ul>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>12:23</TimelineContent>
                </TimelineItem>
            </Timeline>
        )
    }
}

export default CardHistory;