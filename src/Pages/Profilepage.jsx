import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profilepage.css";

function ProfilePage() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  const [profile, setProfile] = useState({
    fullName: "Your Name",
    email: "you@example.com",
    phone: "",
  });

  const [formData, setFormData] = useState(profile);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    // Remove error for current field
    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setMessage("");
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // Phone
    if (formData.phone.trim()) {
      if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone number must contain exactly 10 digits.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = () => {
    setFormData(profile);
    setErrors({});
    setMessage("");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setErrors({});
    setMessage("");
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const updatedProfile = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };

    setProfile(updatedProfile);
    setFormData(updatedProfile);
    setIsEditing(false);
    setErrors({});

    setMessage("Profile updated successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="profile-page">
      <div className="profile-page-card">
        {/* Back to Home */}
        <Link to="/" className="profile-back-link">
          ←
        </Link>
        <div className="profile-page-header">
          <div className="profile-avatar">👤</div>
          <div>
            <h1>My Account</h1>
            <p>Manage your profile details and preferences</p>
          </div>
        </div>

        {message && <div className="profile-success">✓ {message}</div>}

        {/* Profile View */}
        {!isEditing ? (
          <>
            <div className="profile-info-grid">
              {/* Full Name */}
              <div className="profile-info-item">
                <span className="profile-info-label">Full Name</span>

                <span className="profile-info-value">{profile.fullName}</span>
              </div>

              {/* Email */}
              <div className="profile-info-item">
                <span className="profile-info-label">Email</span>

                <span className="profile-info-value">{profile.email}</span>
              </div>

              {/* Phone */}
              <div className="profile-info-item">
                <span className="profile-info-label">Phone</span>

                <span className="profile-info-value">
                  {profile.phone || "Not provided"}
                </span>
              </div>

              {/* Member Since */}
              <div className="profile-info-item">
                <span className="profile-info-label">Member Since</span>

                <span className="profile-info-value">2026</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="profile-actions">
              <button
                type="button"
                className="profile-edit-btn"
                onClick={handleEdit}
              >
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          /* Edit Form */
          <form className="profile-edit-form" onSubmit={handleSave} noValidate>
            {/* Full Name */}
            <div className="profile-form-group">
              <label htmlFor="fullName">Full Name</label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
              />

              {errors.fullName && (
                <p className="profile-error">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="profile-form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
              />

              {errors.email && <p className="profile-error">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="profile-form-group">
              <label htmlFor="phone">Phone</label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10 digit phone number"
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
              />

              {errors.phone && <p className="profile-error">{errors.phone}</p>}
            </div>

            {/* Form Buttons */}
            <div className="profile-actions">
              <button type="submit" className="profile-save-btn">
                ✓ Save Changes
              </button>

              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                ✕ Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
