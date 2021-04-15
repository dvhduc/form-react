import './App.css';
import React, { useState } from 'react';


function App() {

  const [data, setData] = useState({
    txtUsername: '',
    txtPassword: '',
    txtDesc: '',
    sltGender: 1,
    rdLang: 'en',
    chkbStatus: true
  })

  function onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    setData({
      ...data,
      [name]: value
    });
  }

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Form</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtUsername"
                    onChange={onHandleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="txtPassword"
                    onChange={onHandleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Mô tả</label>

                  <textarea
                    name="txtDesc"
                    className="form-control"
                    rows="3"
                    onChange={onHandleChange}
                  ></textarea>

                </div>


                <label>Giới tính</label>

                <select
                  name="sltGender"
                  className="form-control"
                  value={data.sltGender}
                  onChange={onHandleChange}
                >
                  <option value={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
                <br />

                <label>Ngôn ngữ</label>
                <div className="radio">
                  <label>
                    <input type="radio" name="rdLang" value="en" 
                    onChange={onHandleChange}
                    checked={data.rdLang ==="en"}
                    />
                    Tiếng Anh
                  </label>
                  <br/>
                  <label>
                    <input type="radio" name="rdLang" value="vi" 
                    onChange={onHandleChange}
                    checked={data.rdLang ==="vi"}
                    />
                    Tiếng Việt
                  </label>
                </div>
                
                
                <div className="checkbox">
                  <label>
                    <input 
                    name ="chkbStatus"
                    type="checkbox" 
                    value={true} 
                    onChange={onHandleChange}
                    checked={data.chkbStatus===true}
                    />
                    Trạng thái
                  </label>
                </div>                
                <button type="submit" className="btn btn-primary" style={{ margin: 5 }}>Lưu lại</button>
                <button type="reset" className="btn btn-primary">Xóa</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
