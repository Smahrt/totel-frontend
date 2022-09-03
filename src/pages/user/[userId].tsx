import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";

import { Store } from "utils/StoreUtils/Store.js";
import WrapHeader from "components/WrapHeader";
import WrapFooter from "components/WrapFooter";
import styles from "styles/userId.module.css";
import iconEmail from "../../../public/img/icon/icon-email.svg";
import iconFullname from "../../../public/img/icon/icon-fullname.svg";
import iconBio from "../../../public/img/icon/icon-bio.svg";
import iconPassword from "../../../public/img/icon/icon-password.svg";
import iconSend from "../../../public/img/icon/icon-send.svg";
import iconAddImage from "../../../public/img/icon/icon-add-image.svg";
import iconVisibility from "../../../public/img/icon/icon-visibility.svg";
import iconVisibilityOff from "../../../public/img/icon/icon-visibility-off.svg";
import iconEdit from "../../../public/img/icon/icon-edit.svg";
import iconPhone from "../../../public/img/icon/icon-phone.svg";
import iconEarth from "../../../public/img/icon/icon-earth.svg";

const User = ({ params }) => {
  const userId = params.userId;
  const router = useRouter();

  const [userImg, setUserImg] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingEditPassword, setLoadingEditPassword] = useState(false);

  const [errPassNotMatch, setErrPassNotMatch] = useState(false);
  const [errPhoneNotCode, setErrPhoneNotCode] = useState(false);
  const [errPhoneNotNumber, setErrPhoneNotNumber] = useState(false);

  const { state, dispatch } = useContext<any>(Store);

  useEffect(() => {
    if (!state?.userInfo) {
      router.push("/login");
    } else {
      try {
        console.log(process.env);
        const fetchData = async () => {
          const res = await fetch(
            `https://metoospace.herokuapp.com/user/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${state?.userInfo.token}`,
              },
            }
          );
          if (res.ok) {
            const user = await res.json();
            setFullname(user.fullname);
            setEmail(user.email);
            if (user.userImg) {
              setUserImg(user.userImg);
            }
            if (user.bio) {
              setBio(user.bio);
            }
            if (user.phoneCode) {
              setPhoneCode(user.phoneCode);
            }
            if (user.phoneNumber) {
              setPhoneNumber(user.phoneNumber);
            }
          } else {
            console.log(res);
          }
        };
        fetchData();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const uploadHandler = async (e, fetchType) => {
    // fetchType can be: 'userImg'
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      // dispatch({ type: 'UPLOAD_REQUEST' });
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${state?.userInfo.token}` },
        body: bodyFormData,
      });
      if (res.ok) {
        const data = await res.json();
        const res2 = await fetch(`/api/user/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state?.userInfo.token}`,
          },
          body: JSON.stringify({
            fetchType,
            userImg: data.secure_url,
          }),
        });
        if (res2.ok) {
          const data2 = await res2.json();
          // dispatch({type: 'USER_LOGIN', payload: data});
        } else {
          console.log(res2);
        }

        // setLoading(false);
        setUserImg(data.secure_url);
        Swal.fire("Success", "File uploaded successfully", "success");
      } else {
        Swal.fire("error", "File upload failed", "error");
        console.log(res);
      }
      // dispatch({ type: 'UPLOAD_SUCCESS' });
    } catch (err: any) {
      // dispatch({type: 'UPLOAD_FAIL', payload: getError(err)});
      console.log(err);
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleEditPassword = async (e) => {
    e.preventDefault();
    setLoadingEditPassword(true);
    try {
      if (password !== confirmPassword) {
        setErrPassNotMatch(true);
        setLoadingEditPassword(false);
        return;
      }

      const res = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state?.userInfo.token}`,
        },
        body: JSON.stringify({ oldPassword, password }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "USER_LOGIN", payload: data });
        setEditPassword(false);
        Swal.fire("Done!", "Password changed successfully", "success");
      } else if (data.message) {
        throw data.message;
      } else {
        throw "Network response was not OK";
      }
    } catch (err: any) {
      console.log(err);
      Swal.fire("Error", err, "error");
    }
    setLoadingEditPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state?.userInfo.token}`,
        },
        body: JSON.stringify({
          fullname,
          email,
          bio,
          phoneCode,
          phoneNumber,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "USER_LOGIN", payload: data });
        setEditing(false);
        Swal.fire("Done!", "User Profile Updated", "success");
      } else {
        throw "Network response was not OK";
      }
    } catch (err: any) {
      if (!err.message) {
        Swal.fire("Error", err, "error");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name='description' content='Profile' />
      </Head>
      <WrapHeader />
      <h1 className={styles.userh1}>{fullname}</h1>
      <main className={styles.usermain}>
        <aside>
          <div className={styles.userimg}>
            {userImg && (
              <Image
                src={userImg}
                alt={fullname}
                layout='responsive'
                width={200}
                height={200}
              />
            )}
            <div className={styles.userimgedit}>
              <Fab component='label'>
                <Image src={iconAddImage} alt='Add Image icon' />
                <input
                  type='file'
                  onChange={(e) => uploadHandler(e, "userImg")}
                  hidden
                />
              </Fab>
            </div>
          </div>

          {!editPassword && (
            <Fab
              variant='extended'
              onClick={(e) => {
                e.preventDefault();
                setEditPassword(true);
              }}
            >
              <Image src={iconEdit} alt='Edit icon' />
              Change Password
            </Fab>
          )}
          {editPassword && (
            <form
              method='post'
              onSubmit={(e) => {
                handleEditPassword(e);
              }}
            >
              <div className={styles.logregtextfield}>
                <TextField
                  fullWidth
                  id='oldpassword'
                  name='oldpassword'
                  value={oldPassword}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge='end'
                        >
                          {showPassword ? (
                            <Image
                              src={iconVisibilityOff}
                              alt='Visibility Off icon'
                            />
                          ) : (
                            <Image src={iconVisibility} alt='Visibility icon' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label={
                    <span>
                      <span style={{ padding: "0 9px 0 0" }}>
                        <Image src={iconPassword} alt='Password icon' />
                      </span>
                      <span
                        style={{
                          position: "relative",
                          top: "-5px",
                          color: "#292D32",
                        }}
                      >
                        Old Password
                      </span>
                    </span>
                  }
                />
              </div>
              <br />

              <div className={styles.logregtextfield}>
                <TextField
                  fullWidth
                  id='password'
                  name='password'
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errPassNotMatch) {
                      setErrPassNotMatch(false);
                    }
                  }}
                  error={Boolean(errPassNotMatch)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge='end'
                        >
                          {showPassword ? (
                            <Image
                              src={iconVisibilityOff}
                              alt='Visibility Off icon'
                            />
                          ) : (
                            <Image src={iconVisibility} alt='Visibility icon' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label={
                    <span>
                      <span style={{ padding: "0 9px 0 0" }}>
                        <Image src={iconPassword} alt='Password icon' />
                      </span>
                      <span
                        style={{
                          position: "relative",
                          top: "-5px",
                          color: "#292D32",
                        }}
                      >
                        New Password
                      </span>
                    </span>
                  }
                />
              </div>
              <br />
              <div className={styles.logregtextfield}>
                <TextField
                  fullWidth
                  id='confirmpassword'
                  name='confirmpassword'
                  value={confirmPassword}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (errPassNotMatch) {
                      setErrPassNotMatch(false);
                    }
                  }}
                  error={Boolean(errPassNotMatch)}
                  helperText={errPassNotMatch ? "Passwords don't match" : ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={(e) => e.preventDefault()}
                          edge='end'
                        >
                          {showPassword ? (
                            <Image
                              src={iconVisibilityOff}
                              alt='Visibility Off icon'
                            />
                          ) : (
                            <Image src={iconVisibility} alt='Visibility icon' />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label={
                    <span>
                      <span style={{ padding: "0 9px 0 0" }}>
                        <Image src={iconPassword} alt='Password icon' />
                      </span>
                      <span
                        style={{
                          position: "relative",
                          top: "-5px",
                          color: "#292D32",
                        }}
                      >
                        Confirm New Password
                      </span>
                    </span>
                  }
                />
              </div>
              <br />

              <Button
                type='submit'
                variant='contained'
                color='warning'
                disabled={loadingEditPassword}
                sx={{ height: "55px", fontSize: "16px" }}
              >
                CHANGE PASSWORD
                {loadingEditPassword && (
                  <>
                    &nbsp; <CircularProgress color='inherit' size={18} />
                  </>
                )}
              </Button>
            </form>
          )}

          {!editing && (
            <>
              <br />
              <br />
              <Fab
                variant='extended'
                onClick={(e) => {
                  e.preventDefault();
                  setEditing(true);
                }}
              >
                <Image src={iconEdit} alt='Edit icon' />
                Edit Profile
              </Fab>
            </>
          )}
        </aside>
        <section>
          <form
            method='post'
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className={styles.logregtextfield}>
              <TextField
                fullWidth
                id='email'
                name='email'
                value={email}
                variant='standard'
                disabled={true}
                label={
                  <span>
                    <span style={{ padding: "0 9px 0 0" }}>
                      <Image src={iconEmail} alt='Email icon' />
                    </span>
                    <span
                      style={{
                        position: "relative",
                        top: "-5px",
                        color: "#292D32",
                      }}
                    >
                      Email Address {editing && "(unchangeable)"}
                    </span>
                  </span>
                }
              />
            </div>
            <br />

            {state?.userInfo && !state?.userInfo.isEmailVefiried && (
              <div className={styles.logregtextfield}>
                <Fab
                  variant='extended'
                  onClick={(e) => {
                    e.preventDefault();
                    setEditPassword(true);
                  }}
                >
                  Verify Email
                  <Image src={iconSend} alt='Send icon' />
                </Fab>
              </div>
            )}

            <div className={styles.logregtextfield}>
              <TextField
                fullWidth
                id='fullname'
                name='fullname'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                variant={editing ? "outlined" : "standard"}
                disabled={!editing}
                label={
                  <span>
                    <span style={{ padding: "0 9px 0 0" }}>
                      <Image src={iconFullname} alt='Fullname icon' />
                    </span>
                    <span
                      style={{
                        position: "relative",
                        top: "-5px",
                        color: "#292D32",
                      }}
                    >
                      Full Name
                    </span>
                  </span>
                }
              />
            </div>
            <br />

            {(editing || bio) && (
              <>
                <div className={styles.logregtextfield}>
                  <TextField
                    multiline
                    minRows={editing ? "3" : "1"}
                    fullWidth
                    id='bio'
                    name='bio'
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    inputProps={{ maxLength: 300 }}
                    variant={editing ? "outlined" : "standard"}
                    disabled={!editing}
                    label={
                      <span>
                        <span style={{ padding: "0 9px 0 0" }}>
                          <Image src={iconBio} alt='Bio icon' />
                        </span>
                        <span
                          style={{
                            position: "relative",
                            top: "-5px",
                            color: "#292D32",
                          }}
                        >
                          Bio {editing && "(up to 300 characters)"}
                        </span>
                      </span>
                    }
                  />
                </div>
                <br />
              </>
            )}

            {editing ? (
              <>
                {phoneCode && (
                  <>
                    <div className={styles.logregtextfield}>
                      <TextField
                        fullWidth
                        id='phoneCode'
                        name='phoneCode'
                        value={phoneCode}
                        onChange={(e) => {
                          const re = /^\d+$/;
                          if (
                            !(e.target.value === "" || re.test(e.target.value))
                          ) {
                            setErrPhoneNotCode(true);
                          } else if (errPhoneNotCode) {
                            setErrPhoneNotCode(false);
                          }
                          setPhoneCode(e.target.value);
                        }}
                        error={Boolean(errPhoneNotCode)}
                        helperText={
                          errPhoneNotCode
                            ? 'Please enter just numbers not "00" or "+" signs'
                            : ""
                        }
                        variant={editing ? "outlined" : "standard"}
                        disabled={!editing}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>+</InputAdornment>
                          ),
                        }}
                        label={
                          <span>
                            <span style={{ padding: "0 9px 0 0" }}>
                              <Image src={iconEarth} alt='Earth icon' />
                            </span>
                            <span
                              style={{
                                position: "relative",
                                top: "-5px",
                                color: "#292D32",
                              }}
                            >
                              Country Code (e.g., 1)
                            </span>
                          </span>
                        }
                      />
                    </div>
                    <br />
                  </>
                )}
                {phoneNumber && (
                  <>
                    <div className={styles.logregtextfield}>
                      <TextField
                        fullWidth
                        id='phoneNumber'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => {
                          const re = /^\d+$/;
                          if (
                            !(e.target.value === "" || re.test(e.target.value))
                          ) {
                            setErrPhoneNotNumber(true);
                          } else if (errPhoneNotNumber) {
                            setErrPhoneNotNumber(false);
                          }
                          setPhoneNumber(e.target.value);
                        }}
                        error={Boolean(errPhoneNotNumber)}
                        variant={editing ? "outlined" : "standard"}
                        disabled={!editing}
                        helperText={
                          errPhoneNotNumber
                            ? 'Please enter just numbers not "(", ")" or "+" signs'
                            : ""
                        }
                        label={
                          <span>
                            <span style={{ padding: "0 9px 0 0" }}>
                              <Image src={iconPhone} alt='Phone icon' />
                            </span>
                            <span
                              style={{
                                position: "relative",
                                top: "-5px",
                                color: "#292D32",
                              }}
                            >
                              Phone Number (e.g., 1234567890)
                            </span>
                          </span>
                        }
                      />
                    </div>
                    <br />
                  </>
                )}
              </>
            ) : (
              <>
                {phoneCode && phoneNumber && (
                  <>
                    <div className={styles.logregtextfield}>
                      <TextField
                        fullWidth
                        id='phoneCodeNumber'
                        name='phoneCodeNumber'
                        value={`(+${phoneCode}) ${phoneNumber}`}
                        variant='standard'
                        disabled={true}
                        label={
                          <span>
                            <span style={{ padding: "0 9px 0 0" }}>
                              <Image src={iconPhone} alt='Phone icon' />
                            </span>
                            <span
                              style={{
                                position: "relative",
                                top: "-5px",
                                color: "#292D32",
                              }}
                            >
                              Phone Code &amp; Number
                            </span>
                          </span>
                        }
                      />
                    </div>
                    <br />
                  </>
                )}
              </>
            )}

            <div className={styles.logregformbuttons}>
              {editing && (
                <Button
                  type='submit'
                  variant='contained'
                  color='warning'
                  disabled={loading}
                  sx={{ height: "55px", fontSize: "16px" }}
                >
                  APPLY CHANGES
                  {loading && (
                    <>
                      &nbsp; <CircularProgress color='inherit' size={18} />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </section>
      </main>
      <WrapFooter />
    </>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}

export default dynamic(() => Promise.resolve(User), { ssr: false });
