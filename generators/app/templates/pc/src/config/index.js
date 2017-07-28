export default {
    // SERVICE_URL     : 'http://localhost:3000',                                   //开发地址
    // SERVICE_URL     : '',                                                        //测试地址
    SERVICE_URL     : location.origin,
}

export const Dictionary = {
    STATUS          : ['', '状态1', '状态2', '状态3']
};

export const ErrorMessage = {
    networkError    : '网络异常，请稍等再试。'
};