import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	trendCardContainer: {
		height: 100
	},
  	trendCard: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        margin: 0,
        padding: 5
    },
    icon: {
    	flex: 1,
    	alignSelf: "center"
    },
    data: {
    	flex: 3,
    	alignSelf: "stretch",
    	justifyContent: 'flex-end'
    },
    title: {
    	flex: 1,
    	alignSelf: "stretch",
    	justifyContent: 'center'
    },
    titleText: {
    	fontWeight: 'bold'
    },
    content: {
    	flex: 4,
    	flexDirection: "column",
    	alignSelf: "stretch"
    }
});

export default styles;
