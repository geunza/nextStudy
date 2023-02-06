import { Form, Input, Button } from "antd";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./PostCard";
import { addPost } from "../reducers/post";
const PostForm = () => {
  const { ImagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const onSubmit = useCallback(() => {
    dispatch(addPost);
  }, []);
  const [text, setText] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <input type="file" multiple hidden ref={imageInput} />
      <Button onClick={onClickImageUpload}>이미지 업로드</Button>
      <Button type="primary" style={{ float: "left" }} htmlType="submit">
        짹짹
      </Button>
      <div>
        {ImagePaths.map((v) => {
          return (
            <div key={v} style={{ display: "inline-block" }}>
              <img src={v} style={{ width: "200px" }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};
export default PostForm;
