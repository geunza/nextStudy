import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Form, Checkbox, Button } from "antd";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;
const Signup = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  });

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>
          <Form onFinish={onSubmit}>
            <div>
              <label htmlFor="user-id">아이디</label>
              <br />
              <input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
              <label htmlFor="user-nickname">닉네임</label>
              <br />
              <input
                name="user-nickname"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
            </div>
            <div>
              <label htmlFor="user-password">비밀번호</label>
              <br />
              <input
                name="user-password"
                type="password"
                value={password}
                required
                onChange={onChangePassword}
              />
            </div>
            <div>
              <label htmlFor="user-password">비밀번호체크</label>
              <br />
              <input
                name="user-password-check"
                type="password"
                value={passwordCheck}
                required
                onChange={onChangePasswordCheck}
              />
              <br />
              {passwordError && (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              )}
            </div>
            <div>
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                GY말을 잘 듣겠습니다.
              </Checkbox>
              {termError && (
                <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>
              )}
            </div>
            <div style={{ marginTop: 10 }}>
              <Button type="primary" htmlType="submit">
                가입하기
              </Button>
            </div>
          </Form>
        </div>
      </AppLayout>
    </>
  );
};

export default Signup;
