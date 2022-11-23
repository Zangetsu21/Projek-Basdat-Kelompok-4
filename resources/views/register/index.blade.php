@extends('layouts.main')

<div class = "row justify-content-center">
    <div class = "col-md-5">
        <main class = "form-regist">
        <h1 class = "h3 mb-3 fw-normal text-center">Registration Form</h1>
            <form>
                <div class = "form-floating">
                    <input type="text" name="name" class="form-control" id="name"
                    placeholder="Name">
                    <label for="name">Name</label>
                </div>
                <div class = "form-floating">
                    <input type="text" name="username" class="form-control" id="username"
                    placeholder="Username">
                    <label for="username">Username</label>
                </div>
                <div class="form-floating">
                    <input type="address" name="addresss" class="form-control" id="address"
                    placeholder="Address">
                    <label for="address">Address</label>
                </div>
                <div class="form-floating">
                    <input type="phone number" name="phone number" class="phone number" id="Phone Number"
                    placeholder="Phone Number">
                    <label for="phone number">Phone Number</label>
                </div>
                <div class = "form-floating">
                    <input type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" name="password" class="form-control" id="Password"
                    placeholder="Password">
                    <label for="password">Password</label>
                </div>

            </form>
            <small class="d-block text-center">Already have an account? <a href="/login">
            Login</a></small>
        </main>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </div>
</div>