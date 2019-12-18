// Create a button with the class 'resolution'. 
// Clicking this button changes the settings.video.resolution state property to '720p'.

import React, {Component} from 'react' 

export default class YouTubeDebugger extends Component {

    constructor() {
        
        super();
        
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleClickBit = () => {
        // this.setState({
        //     settings: {
        //         ...this.state.settings, bitrate: 12
        //     }
        // })

        this.setState({
            settings: Object.assign({}, this.state.settings, {bitrate: 12})
            }
        )
    }

    handleClickRes = () => {
        // this.setState({
        //     settings: {
        //         ...this.state.settings, 
        //         video: {
        //             ...this.state.settings.video,
        //             resolution: '720p'
        //         }
        //     }
        // })

        this.setState({
            settings: Object.assign(
                {}, this.state.settings, {video: Object.assign(
                    {}, this.state.settings.video, {resolution: '720p'})
                })
            })
        }

    render() {
        return (
        <div>
            <button className='bitrate' onClick={this.handleClickBit}>Change bitrate</button>
            <button className='resolution' onClick={this.handleClickRes}>Change resolution</button>
        </div>
        )
    }
}




