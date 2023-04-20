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
                        <form method="post">
                            <!-- .form-group -->
                            <div class="form-group col-lg-4">
                                <label for="input04">New Password</label>
                                <input type="password" class="form-control" id="input04" value="" >
                            </div>
                            <div class="form-group col-lg-4">
                                <label for="input04">Confirm New Password</label>
                                <input type="password" class="form-control" id="input04" value="" >
                            </div>
                            <!-- /.form-group -->

                            <hr>
                            <!-- .form-actions -->
                            <div class="form-actions col-lg-4">
                                <!-- enable submit btn when user type their current password -->
                                <input type="password" class="form-control ml-auto mr-3 mb-3" id="input06"
                                    placeholder="Enter Current Password" >
                                <button type="submit" class="btn btn-primary" >Update Account</button>
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
    </div>
</template>

