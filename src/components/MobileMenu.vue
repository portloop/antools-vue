<template>
    <div class="mobile-menu-popup">
        <div class="mobile-menu-container">
            <svg class="close" @click="closePopUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">
                <path
                    d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
            <router-link to="/" class="logo">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="38" height="38" rx="8" fill="#FF6E30" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.9645 12.4359C19.632 12.4359 19.3089 12.4769 19 12.5542C19.1988 10.7606 19.9148 9.12398 20.9963 7.79492C25.2971 8.30464 28.6332 11.9646 28.6332 16.4029V22.7294C28.4605 22.7391 28.2864 22.744 28.1112 22.744C24.6706 22.744 21.6709 20.8483 20.1028 18.0423H23.9315V16.4029C23.9315 14.212 22.1554 12.4359 19.9645 12.4359Z"
                        fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.25642 16.9507C9.25642 11.625 13.5738 7.30762 18.8995 7.30762C21.5623 7.30762 23.9731 8.38695 25.7182 10.132C24.1095 8.52336 21.9351 7.48044 19.5191 7.32724C17.894 9.12575 16.9044 11.5095 16.9044 14.1243C16.9044 14.3194 16.9099 14.5131 16.9208 14.7055C16.299 15.2538 15.9068 16.0565 15.9068 16.9507V17.6157H21.8922L17.5214 17.6158C18.9445 21.4968 22.672 24.2661 27.0462 24.2661C27.5546 24.2661 28.0543 24.2287 28.5425 24.1565V28.2563H21.8922V24.2661H15.9068V28.2563H9.25642V20.9409V16.9507Z"
                        fill="white" />
                </svg>
                <span>antools.</span>
            </router-link>
            <div class="header-menu">
                <router-link to="/">Home</router-link>
                <div class="navbar-dropdown-list">
                    <span>Categories</span>
                    <div class="navbar-dropdown-content">
                        <router-link to="/">Development Tools</router-link>
                        <router-link to="/">Design Tools</router-link>
                        <router-link to="/">QA Tools</router-link>
                    </div>
                </div>
                <router-link to="#">My Collections</router-link>
                <router-link to="#">Blog</router-link>
            </div>
            <div class="auth-section">
                <router-link to="/">Login</router-link>
                <router-link to="/" class="orange-button">Sign Up</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closePopUp () {
            let mobileMenu = document.querySelector('.mobile-menu-popup');

            document.querySelector('.close').addEventListener('click', () => {
                mobileMenu.classList.toggle('mm-active');
            })
        }
    }
}
</script>
<style scoped>
.mobile-menu-popup {
    height: 100%;
    position: absolute;
    background-color: #262e36;
    z-index: 999;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 10px;
    width: 100%;
}

.mobile-menu-container {
    position: relative;
}

.mobile-menu-container a,
.mobile-menu-container .navbar-dropdown-list span {
    color: aliceblue;
    text-decoration: none;
    padding-bottom: 15px;
    margin-top: 20px;
    border-bottom: 1px solid #3d4a57;
    width: 100%;
    display: flex;
}

.navbar-dropdown-list .navbar-dropdown-content {
    display: none;
}


a.orange-button {
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
}


.mobile-menu-container .auth-section {
    flex-direction: column;
    display: flex;
}

a.logo {
    align-items: center;
    display: flex;
    padding-bottom: 15px;
    border-bottom: 1px solid #3d4a57;
    width: 100%;
    justify-content: center;
    margin-top: 0;
}

.logo span {
    margin-left: 10px;
}

.close  {
    fill: #fff;
    position: absolute;
    top: 10px;
    right: 5px;
}

.header-menu .navbar-dropdown-list:hover .navbar-dropdown-content {
    flex-direction: column;
    padding-left: 20px;
}
</style>