import React, { FunctionComponent } from 'react';
import { StyleSheet, StatusBar, ShadowPropTypesIOS, Dimensions, ScrollView } from 'react-native';
import { Container, View } from 'native-base';
import HeaderBackButton from './HeaderBackButton';

interface IMainLayout {
    showFooterTab?: boolean;
    headerFlex?: number;
    headerView?: any;
    headerTitle?: string;
    props?: any;
    ScrollViewStyle?: object;
    main?: "View" | "ScrollView"
}

const MainLayout: FunctionComponent<IMainLayout> = ({ showFooterTab,ScrollViewStyle, children, headerFlex, headerView, headerTitle,main, props }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Container style={{height : '100%'}}>
                {headerView ? headerView : <HeaderBackButton title={headerTitle!} />}
                {(main && main === "View") ? <View style={{flex : 1}}>
                    {children}
                </View>  : <ScrollView contentContainerStyle={ScrollViewStyle ? ScrollViewStyle : undefined}>
                    {children}
                </ScrollView>}
            </Container>
        </>
    )
}


const styles = StyleSheet.create({
    
})

export default MainLayout;