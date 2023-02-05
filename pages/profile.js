import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
const Profile = () => {
  const followerList = [
    { nickname: "제로초1" },
    { nickname: "바보1" },
    { nickname: "노드버드1" },
  ];
  const followingList = [
    { nickname: "제로초2" },
    { nickname: "바보2" },
    { nickname: "노드버드2" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList} />
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
