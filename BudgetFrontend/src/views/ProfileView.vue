<template>
    <div class="page-section m-3">
        <!-- grid row -->
        <div class="row">
            <!-- grid column -->
            <div class="col-lg-4">
                <!-- .card -->
                <div class="card card-fluid">
                    <h6 class="card-header"> Your Details </h6>
                    <!-- .nav -->
                    <nav class="nav nav-tabs flex-column">
                        <router-link to="profile" class="nav-link">Profile</router-link>
                        <router-link to="usersettings" class="nav-link">Password</router-link>
                        <a href="user-billing-settings.html" class="nav-link">Billing</a>
                        <a href="user-notification-settings.html" class="nav-link">Notifications</a>
                        
                    </nav>
                    <!-- /.nav -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /grid column -->
            <!-- grid column -->
            <div class="col-lg-8">
                <!-- .card -->
                <div class="card card-fluid">
                    <h6 class="card-header"> Account </h6>
                    <!-- .card-body -->
                    <div class="card-body">
                        <!-- form -->
                        <form>
                            <div class="form-group">
                                <label for="input03">Username</label>
                                <div class="row">
                                    <div class="col-lg-4 pe-0">
                                        <input type="text" class="form-control " disabled id="input03"  value="bent10" >
                                    </div>
                                    <div class="col-lg-4">
                                        <button class="btn pi pi-cog btn-lg"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <label for="input03">Email</label>
                                    <div class="col-lg-4 pe-0">
                                        <input type="email" class="form-control " disabled id="input03"  value="bent10@looper.com" >
                                    </div>
                                    <div class="col-lg-4">
                                        <button class="btn pi pi-cog btn-lg"></button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="input03">Password</label>
                                <div class="row">
                                    <div class="col-lg-4 pe-0">
                                        <input type="password" class="form-control " disabled id="input03"  value="bent10@looper.com" >
                                    </div>
                                    <div class="col-lg-4">
                                        <button class="btn pi pi-cog btn-lg"></button>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <!-- .form-actions -->
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary">Update Account</button>
                            </div>
                            <!-- /.form-actions -->
                        </form>
                        <!-- /form -->
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /grid column -->
        </div>
    <!-- /grid row -->
</div></template>

