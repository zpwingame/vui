import Alert from "../modal/modal.js";

let instance;

const install = (Vue, _OPTIONS) => {
    function getInstance(o) {
        o = o || Alert.created(Vue, _OPTIONS || {});
        return o;
    }
    const show = text => {
        instance = Alert.created(Vue, _OPTIONS || {});
        const options = { footer: false, content: text };
        instance.show(options);
    };

    //挂在一些全局方法
    Vue.prototype.$alert = show;
};
export default { install };
