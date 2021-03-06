import "./UserProfile.css";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from '../../Containers/ordersTable/orderTable';
import { getUserDetails, updateUserProfile, getUserOrders } from "../../redux-store/actions/userActions";
import { useEffect } from "react";
import Button from "../../Components/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authInputsValidation } from "../../utils/validate";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const {  error, user } = userDetails;
  const updatedUser = useSelector((state) => state.userUpdateProfile);
  const userOrders = useSelector((state) => state.userOrders);
  const {orders} = userOrders
  
 
  
  // functions that come with react form hook
  // to handle input fields and form submission
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: user.username, email: user.email },
    mode: "onBlur",
    resolver: yupResolver(authInputsValidation),
  });

  let dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUserDetails("profile"));
      dispatch(getUserOrders());
    
  },[dispatch]);

  const submit = (data) => {
    //// dispatch update profile
    dispatch(updateUserProfile(data))
   
   
  };

  return (
    <div className="userProfile">
      <div className="userProfile-container">
        <div className="user-info">
          <Form className="user-info-form" onSubmit={handleSubmit(submit)}>
                {updatedUser.success && <h3 className="success-message ">profile updated</h3>} 
              {updatedUser.error && <h3 className="error-message">{error}</h3>} 
            <h2>User Profile</h2>
            <Input
              type="text"
              label="Username"
              name="username"
              {...register("username")}
            />

            <Input
              type="text"
              label="Email"
              name="email"
              {...register("email")}
              errormessage={errors.email?.message}
              className={errors.email && "error"}
            />

            <Input
              type="password"
              label="Password"
              name="password"
              {...register("password")}
              errormessage={errors.password?.message}
              className={errors.password && "error"}
            />

            <Input
              type="password"
              label="Confirm Password"
              name="confirmedPassword"
              {...register("confirmedPassword")}
              errormessage={errors.confirmedPassword?.message}
              className={errors.confirmedPassword && "error"}
            />

            <Button type="submit" className="user-info-updateButton">
              Edit
            </Button>
          </Form>
        </div>
        <div className="user-order">
          <h2>My Orders</h2>
          <OrdersTable orders={orders}/>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
