import React, { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import Loader from "../components/Loader"
import { useRegisterMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"

const RegisterScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [register, { isLoading }] = useRegisterMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get("redirect") || "/"

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error("password is incorrect")
      return
    } else {
      try {
        const res = await register({ email, password }).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate(redirect)
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="my-3 fs-4">
          <Form.Label>Name Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="email" className="my-3 fs-4">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="fs-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="my-3 fs-4">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-2" disabled={isLoading}>
        Register
        </Button>
        {isLoading && <Loader />}
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Register</Link>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          Already have an Account?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/login"}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
