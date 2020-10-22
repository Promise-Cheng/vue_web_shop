import { notification } from 'ant-design-vue';
export function notice1(message, description) {
    notification.open({
        message: message,
        description: description,
        onClick: () => {
            console.log("Notification Clicked!");
        }
    });
}
/**
 * 
 * @param {*} message 
 * @param {*} description 
 * @param {*} type 四类：success、info、warning、error
 */
export function notice2(message, description, type) {
    notification[type]({
        message: message,
        description: description,
    });
}