import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  	navigation: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#EB8657',
        maxHeight: 98,
        marginTop: -30,
        marginLeft: -1,
        marginRight: -1,
        transform: [{skewY: "-3deg"}]
    },
    title: {
    	fontWeight: 'bold',
    	fontSize: 24,
    	lineHeight: 48,
    	textAlign: 'center',
    	marginTop: 50,
    	backgroundColor: 'transparent',
    	transform: [{skewY: "3deg"}]
    }
});

export default styles;
