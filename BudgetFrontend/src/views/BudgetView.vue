<template>
  <div class="row">
    <div class="col-lg-6 card">
      <div class="card-header pb-0">
        <h3>Expenses</h3>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Amount
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Type
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Date
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p class="text-xs text-secondary mb-0">
                        250$
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">Shopping</p>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"
                    >23/06/18</span
                  >
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                    >Edit</a
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <p class="text-xs text-secondary mb-0">
                        60$
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">Car repairs</p>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold"
                    >11/06/18</span
                  >
                </td>
                <td class="align-middle">
                  <a
                    href="javascript:;"
                    class="text-secondary font-weight-bold text-xs"
                    data-toggle="tooltip"
                    data-original-title="Edit user"
                    >Edit</a
                  >
                  <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <p class="text-xs text-secondary mb-0">
                            512.23$
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">Bills</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >08/06/18</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </td>
              </tr>
            </tbody>
          </table>
          <button id="AddButton" class="btn btn-primary d-md-flex mx-auto">Add new</button>
        </div>
      </div>
    </div>


    <div class="col-lg-6 card">
        <div class="card-header pb-0">
          <h3>Income</h3>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Amount
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Type
                  </th>
                  <th
                    class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Date
                  </th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs text-secondary mb-0">
                                      2320.03$
                                  </p>
                              </div>
                          </div>
                      </td>
                      <td>
                          <p class="text-xs font-weight-bold mb-0">Monthly Payment</p>
                      </td>
                      <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold"
                          >02/06/18</span
                          >
                      </td>
                    <td class="align-middle">
                        <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        >Edit</a
                        >
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                  <p class="text-xs text-secondary mb-0">
                                      2320.03$
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p class="text-xs font-weight-bold mb-0">Monthly Payment</p>
                        </td>
                        <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold"
                      >02/05/18</span
                      >
                    </td>
                    <td class="align-middle">
                        <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                        >Edit</a
                        >
                    </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <p class="text-xs text-secondary mb-0">
                          2320.03$
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Monthly Payment</p>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold"
                      >02/04/18</span
                    >
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <button id="AddButton" class="btn btn-primary d-md-flex mx-auto">Add new</button>
          </div>
        </div>
      </div>
  </div>
</template>
  
<script>

</script>
<style>
  #AddButton{
    margin-top: 7px;
  }
</style>