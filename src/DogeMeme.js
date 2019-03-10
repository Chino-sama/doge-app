import React, { Component } from 'react';
import './DogeMeme.css';

class DogeMeme extends Component {
	state = {
		top: '',
		bottom: ''
	}

	onChangeText = (e) => {
		let prop = e.target.name;
		let value = e.target.value;
		this.setState({
			[prop]: value
		});
	}

	render() {
		return (
			<div className='doge-container'>
				<div className='doge-form'>
					<input
						className="doge-input" 
						name="top"
						type="text"
						value={this.state.top}
						onChange={this.onChangeText}
						placeholder="Here goes top text"
					/>
					<input
						className="doge-input" 
						name="bottom"
						type="text"
						value={this.state.bottom}
						onChange={this.onChangeText}
						placeholder="Here goes bottom text"
					/>
				</div>

				<div className='doge-meme doge-container'>
					<div className="doge-text">
						{this.state.top}
					</div>
					<div className="doge-text">
						{this.state.bottom}
					</div>
				</div>
			</div>
		);
	}
}

export default DogeMeme;
