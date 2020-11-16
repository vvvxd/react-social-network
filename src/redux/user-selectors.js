export const getAllUsers = (state) => state.userPage.users;

export const getPageSize = (state) => state.userPage.pageSize;

export const getTotalUserCount = (state) => state.userPage.totalUserCount;

export const getCurrentPage = (state) => state.userPage.currentPage;

export const getIsFetching = (state) => state.userPage.isFetching;

export const getFollowingInProgress = (state) => state.userPage.followingInProgress;
