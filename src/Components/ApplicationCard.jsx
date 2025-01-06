import toast from "react-hot-toast";
/* eslint-disable react/prop-types */
const ApplicationCard = ({ info, setApplicantInfo, applicantInfo }) => {
  const {
    countryImage,
    countryName,
    appliedFee,
    appliedDate,
    visa_type,
    firstName,
    lastName,
    email,
    _id,
  } = info;

  const handleDelete = (_id) => {
    fetch(
      `https://visa-processing-server-pearl.vercel.app/addApplication/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Removed Successfully");
          const remaining = applicantInfo.filter(
            (application) => application._id !== _id
          );
          setApplicantInfo(remaining);
        }
      });
  };

  return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={countryImage}
                  alt="country image"
                />
              </div>
            </div>
            <div>
              <div className="text-sm opacity-50">{countryName}</div>
            </div>
          </div>
        </td>
        <td>
          ${appliedFee}
          <br />
          <span className="badge badge-ghost badge-sm">
            {appliedDate} 
          </span>
          <br />
          {visa_type}
        </td>
        <td>
            <span>{firstName} {lastName}</span>
            <p>{email}</p>
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </th>
      </tr>
  );
};

export default ApplicationCard;
