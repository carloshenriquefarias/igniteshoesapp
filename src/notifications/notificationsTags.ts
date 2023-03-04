import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate(){
    OneSignal.sendTags({
        'user_name': 'Carlos Henrique',
        'user_email': 'carloshenriquepvh@hotmail.com'
    });
}

export function tagCartUpdate(itemCounts: string){
    OneSignal.sendTag(
        'cart_items_count', itemCounts
    );
}