import React, {Component} from 'react';
import Svg,
{
	Ellipse
} from 'react-native-svg';

const SunSvg = (props) => {
	return (
		<Svg 
			width={props.width}
			height={props.height}>
			<Ellipse cx={props.radius} cy={props.radius} rx={props.radius} ry={props.radius} fill="#F2C94C" />
		</Svg>
	)
};

export default SunSvg