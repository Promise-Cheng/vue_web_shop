
export default {
    methods: {
        /**
         * 用户名称验证 4到16位（字母，数字，下划线，减号）
         *
         * @param userName
         * @returns {boolean}
         */
        validUserName(userName) {
            var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
            if (pattern.test(userName.trim())) {
                return (true);
            } else {
                return (false);
            }
        },

        /**
         * 手机号正则验证
         * @returns {boolean}
         */
        validPhoneNumber(phone) {
            if ((/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
                return true;
            }
            return false;
        },
    }

}