import React, {Component} from 'react';
import Svg,
{
	G,
	Use,
	Defs,
	Path
} from 'react-native-svg';

const RainSvg = (props) => {
	return (
		<Svg 
			width={props.width}
			height={props.height}
			viewBox="0 0 ${props.width} ${props.height}">
			<G id="Canvas" transform={{translate: "-116 11"}}>
				<G id="Component">
					<G id="Ellipse 2">
						<Use href="#path0_fill" transform={{translate: "119.65 0.398054"}} fill="#C4C4C4"/>
					</G>
					<G id="Ellipse 3">
						<Use href="#path1_fill" transform={{translate: "119.65 0.398054"}} fill="#C4C4C4"/>
					</G>
					<G id="Ellipse 4">
						<Use href="#path2_fill" transform={{translate: "134.354 -11"}} fill="#C4C4C4"/>
					</G>
					<G id="Ellipse 5">
						<Use href="#path3_fill" transform={{translate: "158.106 -4.86262"}} fill="#C4C4C4"/>
					</G>
					<G id="Ellipse 6">
						<Use href="#path4_fill" transform={{translate: "173.989 3.12581"}} fill="#C4C4C4"/>
					</G>
					</G>
					<G id="Line 2">
						<Use href="#path5_stroke" transform={{matrix: "-0.684659 0.728864 -0.977231 -0.212179 128.57 30.8605"}} fill="#2D9CDB"/>
					</G>
					<G id="Line 2">
						<Use href="#path5_stroke" transform={{matrix: "-0.684659 0.728864 -0.977231 -0.212179 140.366 30.8605"}} fill="#2D9CDB"/>
					</G>
					<G id="Line 2">
						<Use href="#path5_stroke" transform={{matrix: "-0.684659 0.728864 -0.977231 -0.212179 152.163 30.8605"}} fill="#2D9CDB"/>
					</G>
					<G id="Line 2">
						<Use href="#path5_stroke" transform={{matrix: "-0.684659 0.728864 -0.977231 -0.212179 163.959 30.8605"}} fill="#2D9CDB"/>
					</G>
					<G id="Line 2">
						<Use href="#path6_stroke" transform={{matrix: "-0.684659 0.728864 -0.977231 -0.212179 175.756 30.8605"}} fill="#2D9CDB"/>
					</G>
				</G>
				<Defs>
					<Path id="path0_fill" d="M 82 14.2476C 82 22.1163 63.6437 28.4951 41 28.4951C 18.3563 28.4951 0 22.1163 0 14.2476C 0 6.37885 18.3563 0 41 0C 63.6437 0 82 6.37885 82 14.2476Z"/>
					<Path id="path1_fill" d="M 28.2759 12.8228C 28.2759 19.9046 24.0345 21.3713 14.1379 24.2208C 9.89655 19.9466 0 19.9046 0 12.8228C 0 5.74096 6.32977 0 14.1379 0C 21.9461 0 28.2759 5.74096 28.2759 12.8228Z"/>
					<Path id="path2_fill" d="M 31.669 12.2748C 31.669 19.054 24.5796 24.5496 15.8345 24.5496C 7.08934 24.5496 0 19.054 0 12.2748C 0 5.49562 7.08934 0 15.8345 0C 24.5796 0 31.669 5.49562 31.669 12.2748Z"/>
					<Path id="path3_fill" d="M 29.6897 10.7405C 29.6897 16.6723 23.0434 21.4809 14.8448 21.4809C 6.64625 21.4809 0 16.6723 0 10.7405C 0 4.80867 6.64625 0 14.8448 0C 23.0434 0 29.6897 4.80867 29.6897 10.7405Z"/>
					<Path id="path4_fill" d="M 27.6617 11.9579C 27.6617 18.7371 10.0258 18.0954 2.92034 18.0954C -4.18509 18.0954 3.91 23.3402 3.91 16.561C 3.91 9.78181 3.73215 2.75208 10.8376 2.75208C 15.7859 -4.91958 27.6617 5.17875 27.6617 11.9579Z"/>
					<Path id="path5_stroke" d="M 0 0L 17.2297 0L 17.2297 -0.5L 0 -0.5L 0 0Z"/>
					<Path id="path6_stroke" d="M 0 0L 17.2297 0L 17.2297 -0.5L 0 -0.5L 0 0Z"/>
				</Defs>
		</Svg>
	)
};

export default RainSvg