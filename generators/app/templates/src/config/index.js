export default {
    // SERVICE_URL     : 'http://localhost:3000',                                   //开发地址
    // IMG_URL         : 'http://localhost/static/',
    // BASE_LINK       : 'http://localhost/client-desktop/',


    // SERVICE_URL     : 'http://test.test.internal.muqian.com',                    //测试地址
    // IMG_URL         : 'http://test.test.internal.muqian.com/static/',
    // BASE_LINK       : 'http://test.test.internal.muqian.com/client-desktop/',


    SERVICE_URL     : location.origin,
    IMG_URL         : location.origin + '/static/',
    BASE_LINK       : location.origin + '/client-desktop/',
    
}

export const Dictionary = {
    STATUS          : ['', '状态1', '状态2', '状态3']
};

export const ErrorMessage = {
    networkError    : '网络异常，请稍等再试。'
};