// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

// InviteUserToTeamRole - The role of the user to invite
type InviteUserToTeamRole string

const (
	InviteUserToTeamRoleOwner       InviteUserToTeamRole = "OWNER"
	InviteUserToTeamRoleMember      InviteUserToTeamRole = "MEMBER"
	InviteUserToTeamRoleDeveloper   InviteUserToTeamRole = "DEVELOPER"
	InviteUserToTeamRoleSecurity    InviteUserToTeamRole = "SECURITY"
	InviteUserToTeamRoleBilling     InviteUserToTeamRole = "BILLING"
	InviteUserToTeamRoleViewer      InviteUserToTeamRole = "VIEWER"
	InviteUserToTeamRoleContributor InviteUserToTeamRole = "CONTRIBUTOR"
)

func (e InviteUserToTeamRole) ToPointer() *InviteUserToTeamRole {
	return &e
}
func (e *InviteUserToTeamRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "SECURITY":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = InviteUserToTeamRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InviteUserToTeamRole: %v", v)
	}
}

// InviteUserToTeamTeamsRole - Sets the project roles for the invited user
type InviteUserToTeamTeamsRole string

const (
	InviteUserToTeamTeamsRoleAdmin            InviteUserToTeamTeamsRole = "ADMIN"
	InviteUserToTeamTeamsRoleProjectViewer    InviteUserToTeamTeamsRole = "PROJECT_VIEWER"
	InviteUserToTeamTeamsRoleProjectDeveloper InviteUserToTeamTeamsRole = "PROJECT_DEVELOPER"
)

func (e InviteUserToTeamTeamsRole) ToPointer() *InviteUserToTeamTeamsRole {
	return &e
}
func (e *InviteUserToTeamTeamsRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ADMIN":
		fallthrough
	case "PROJECT_VIEWER":
		fallthrough
	case "PROJECT_DEVELOPER":
		*e = InviteUserToTeamTeamsRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InviteUserToTeamTeamsRole: %v", v)
	}
}

type InviteUserToTeamProjects struct {
	// The ID of the project.
	ProjectID string `json:"projectId"`
	// Sets the project roles for the invited user
	Role InviteUserToTeamTeamsRole `json:"role"`
}

func (o *InviteUserToTeamProjects) GetProjectID() string {
	if o == nil {
		return ""
	}
	return o.ProjectID
}

func (o *InviteUserToTeamProjects) GetRole() InviteUserToTeamTeamsRole {
	if o == nil {
		return InviteUserToTeamTeamsRole("")
	}
	return o.Role
}

type InviteUserToTeamRequestBody struct {
	// The id of the user to invite
	UID *string `json:"uid,omitempty"`
	// The email address of the user to invite
	Email *string `json:"email,omitempty"`
	// The role of the user to invite
	Role     *InviteUserToTeamRole      `default:"MEMBER" json:"role"`
	Projects []InviteUserToTeamProjects `json:"projects,omitempty"`
}

func (i InviteUserToTeamRequestBody) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(i, "", false)
}

func (i *InviteUserToTeamRequestBody) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &i, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *InviteUserToTeamRequestBody) GetUID() *string {
	if o == nil {
		return nil
	}
	return o.UID
}

func (o *InviteUserToTeamRequestBody) GetEmail() *string {
	if o == nil {
		return nil
	}
	return o.Email
}

func (o *InviteUserToTeamRequestBody) GetRole() *InviteUserToTeamRole {
	if o == nil {
		return nil
	}
	return o.Role
}

func (o *InviteUserToTeamRequestBody) GetProjects() []InviteUserToTeamProjects {
	if o == nil {
		return nil
	}
	return o.Projects
}

type InviteUserToTeamRequest struct {
	TeamID      string                      `pathParam:"style=simple,explode=false,name=teamId"`
	RequestBody InviteUserToTeamRequestBody `request:"mediaType=application/json"`
}

func (o *InviteUserToTeamRequest) GetTeamID() string {
	if o == nil {
		return ""
	}
	return o.TeamID
}

func (o *InviteUserToTeamRequest) GetRequestBody() InviteUserToTeamRequestBody {
	if o == nil {
		return InviteUserToTeamRequestBody{}
	}
	return o.RequestBody
}

type InviteUserToTeamResponseBodyRole string

const (
	InviteUserToTeamResponseBodyRoleOwner       InviteUserToTeamResponseBodyRole = "OWNER"
	InviteUserToTeamResponseBodyRoleMember      InviteUserToTeamResponseBodyRole = "MEMBER"
	InviteUserToTeamResponseBodyRoleDeveloper   InviteUserToTeamResponseBodyRole = "DEVELOPER"
	InviteUserToTeamResponseBodyRoleSecurity    InviteUserToTeamResponseBodyRole = "SECURITY"
	InviteUserToTeamResponseBodyRoleBilling     InviteUserToTeamResponseBodyRole = "BILLING"
	InviteUserToTeamResponseBodyRoleViewer      InviteUserToTeamResponseBodyRole = "VIEWER"
	InviteUserToTeamResponseBodyRoleContributor InviteUserToTeamResponseBodyRole = "CONTRIBUTOR"
)

func (e InviteUserToTeamResponseBodyRole) ToPointer() *InviteUserToTeamResponseBodyRole {
	return &e
}
func (e *InviteUserToTeamResponseBodyRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "SECURITY":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = InviteUserToTeamResponseBodyRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for InviteUserToTeamResponseBodyRole: %v", v)
	}
}

type ResponseBodyTeamRoles string

const (
	ResponseBodyTeamRolesOwner       ResponseBodyTeamRoles = "OWNER"
	ResponseBodyTeamRolesMember      ResponseBodyTeamRoles = "MEMBER"
	ResponseBodyTeamRolesDeveloper   ResponseBodyTeamRoles = "DEVELOPER"
	ResponseBodyTeamRolesSecurity    ResponseBodyTeamRoles = "SECURITY"
	ResponseBodyTeamRolesBilling     ResponseBodyTeamRoles = "BILLING"
	ResponseBodyTeamRolesViewer      ResponseBodyTeamRoles = "VIEWER"
	ResponseBodyTeamRolesContributor ResponseBodyTeamRoles = "CONTRIBUTOR"
)

func (e ResponseBodyTeamRoles) ToPointer() *ResponseBodyTeamRoles {
	return &e
}
func (e *ResponseBodyTeamRoles) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "SECURITY":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = ResponseBodyTeamRoles(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResponseBodyTeamRoles: %v", v)
	}
}

type ResponseBodyTeamPermissions string

const (
	ResponseBodyTeamPermissionsCreateProject            ResponseBodyTeamPermissions = "CreateProject"
	ResponseBodyTeamPermissionsFullProductionDeployment ResponseBodyTeamPermissions = "FullProductionDeployment"
	ResponseBodyTeamPermissionsUsageViewer              ResponseBodyTeamPermissions = "UsageViewer"
)

func (e ResponseBodyTeamPermissions) ToPointer() *ResponseBodyTeamPermissions {
	return &e
}
func (e *ResponseBodyTeamPermissions) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CreateProject":
		fallthrough
	case "FullProductionDeployment":
		fallthrough
	case "UsageViewer":
		*e = ResponseBodyTeamPermissions(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResponseBodyTeamPermissions: %v", v)
	}
}

type InviteUserToTeamResponseBody2 struct {
	UID             string                           `json:"uid"`
	Username        string                           `json:"username"`
	Role            InviteUserToTeamResponseBodyRole `json:"role"`
	TeamRoles       []ResponseBodyTeamRoles          `json:"teamRoles,omitempty"`
	TeamPermissions []ResponseBodyTeamPermissions    `json:"teamPermissions,omitempty"`
}

func (o *InviteUserToTeamResponseBody2) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *InviteUserToTeamResponseBody2) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}

func (o *InviteUserToTeamResponseBody2) GetRole() InviteUserToTeamResponseBodyRole {
	if o == nil {
		return InviteUserToTeamResponseBodyRole("")
	}
	return o.Role
}

func (o *InviteUserToTeamResponseBody2) GetTeamRoles() []ResponseBodyTeamRoles {
	if o == nil {
		return nil
	}
	return o.TeamRoles
}

func (o *InviteUserToTeamResponseBody2) GetTeamPermissions() []ResponseBodyTeamPermissions {
	if o == nil {
		return nil
	}
	return o.TeamPermissions
}

// ResponseBodyRole - The role used for the invitation
type ResponseBodyRole string

const (
	ResponseBodyRoleOwner       ResponseBodyRole = "OWNER"
	ResponseBodyRoleMember      ResponseBodyRole = "MEMBER"
	ResponseBodyRoleDeveloper   ResponseBodyRole = "DEVELOPER"
	ResponseBodyRoleSecurity    ResponseBodyRole = "SECURITY"
	ResponseBodyRoleBilling     ResponseBodyRole = "BILLING"
	ResponseBodyRoleViewer      ResponseBodyRole = "VIEWER"
	ResponseBodyRoleContributor ResponseBodyRole = "CONTRIBUTOR"
)

func (e ResponseBodyRole) ToPointer() *ResponseBodyRole {
	return &e
}
func (e *ResponseBodyRole) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "SECURITY":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = ResponseBodyRole(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ResponseBodyRole: %v", v)
	}
}

// TeamRoles - The team roles of the user
type TeamRoles string

const (
	TeamRolesOwner       TeamRoles = "OWNER"
	TeamRolesMember      TeamRoles = "MEMBER"
	TeamRolesDeveloper   TeamRoles = "DEVELOPER"
	TeamRolesSecurity    TeamRoles = "SECURITY"
	TeamRolesBilling     TeamRoles = "BILLING"
	TeamRolesViewer      TeamRoles = "VIEWER"
	TeamRolesContributor TeamRoles = "CONTRIBUTOR"
)

func (e TeamRoles) ToPointer() *TeamRoles {
	return &e
}
func (e *TeamRoles) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OWNER":
		fallthrough
	case "MEMBER":
		fallthrough
	case "DEVELOPER":
		fallthrough
	case "SECURITY":
		fallthrough
	case "BILLING":
		fallthrough
	case "VIEWER":
		fallthrough
	case "CONTRIBUTOR":
		*e = TeamRoles(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamRoles: %v", v)
	}
}

// TeamPermissions - The team permissions of the user
type TeamPermissions string

const (
	TeamPermissionsCreateProject            TeamPermissions = "CreateProject"
	TeamPermissionsFullProductionDeployment TeamPermissions = "FullProductionDeployment"
	TeamPermissionsUsageViewer              TeamPermissions = "UsageViewer"
)

func (e TeamPermissions) ToPointer() *TeamPermissions {
	return &e
}
func (e *TeamPermissions) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CreateProject":
		fallthrough
	case "FullProductionDeployment":
		fallthrough
	case "UsageViewer":
		*e = TeamPermissions(v)
		return nil
	default:
		return fmt.Errorf("invalid value for TeamPermissions: %v", v)
	}
}

// InviteUserToTeamResponseBody1 - The member was successfully added to the team
type InviteUserToTeamResponseBody1 struct {
	// The ID of the invited user
	UID string `json:"uid"`
	// The username of the invited user
	Username string `json:"username"`
	// The email of the invited user. Not included if the user was invited via their UID.
	Email *string `json:"email,omitempty"`
	// The role used for the invitation
	Role ResponseBodyRole `json:"role"`
	// The team roles of the user
	TeamRoles []TeamRoles `json:"teamRoles,omitempty"`
	// The team permissions of the user
	TeamPermissions []TeamPermissions `json:"teamPermissions,omitempty"`
}

func (o *InviteUserToTeamResponseBody1) GetUID() string {
	if o == nil {
		return ""
	}
	return o.UID
}

func (o *InviteUserToTeamResponseBody1) GetUsername() string {
	if o == nil {
		return ""
	}
	return o.Username
}

func (o *InviteUserToTeamResponseBody1) GetEmail() *string {
	if o == nil {
		return nil
	}
	return o.Email
}

func (o *InviteUserToTeamResponseBody1) GetRole() ResponseBodyRole {
	if o == nil {
		return ResponseBodyRole("")
	}
	return o.Role
}

func (o *InviteUserToTeamResponseBody1) GetTeamRoles() []TeamRoles {
	if o == nil {
		return nil
	}
	return o.TeamRoles
}

func (o *InviteUserToTeamResponseBody1) GetTeamPermissions() []TeamPermissions {
	if o == nil {
		return nil
	}
	return o.TeamPermissions
}

type InviteUserToTeamResponseBodyType string

const (
	InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody1 InviteUserToTeamResponseBodyType = "inviteUserToTeam_responseBody_1"
	InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody2 InviteUserToTeamResponseBodyType = "inviteUserToTeam_responseBody_2"
)

// InviteUserToTeamResponseBody - The member was successfully added to the team
type InviteUserToTeamResponseBody struct {
	InviteUserToTeamResponseBody1 *InviteUserToTeamResponseBody1
	InviteUserToTeamResponseBody2 *InviteUserToTeamResponseBody2

	Type InviteUserToTeamResponseBodyType
}

func CreateInviteUserToTeamResponseBodyInviteUserToTeamResponseBody1(inviteUserToTeamResponseBody1 InviteUserToTeamResponseBody1) InviteUserToTeamResponseBody {
	typ := InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody1

	return InviteUserToTeamResponseBody{
		InviteUserToTeamResponseBody1: &inviteUserToTeamResponseBody1,
		Type:                          typ,
	}
}

func CreateInviteUserToTeamResponseBodyInviteUserToTeamResponseBody2(inviteUserToTeamResponseBody2 InviteUserToTeamResponseBody2) InviteUserToTeamResponseBody {
	typ := InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody2

	return InviteUserToTeamResponseBody{
		InviteUserToTeamResponseBody2: &inviteUserToTeamResponseBody2,
		Type:                          typ,
	}
}

func (u *InviteUserToTeamResponseBody) UnmarshalJSON(data []byte) error {

	var inviteUserToTeamResponseBody2 InviteUserToTeamResponseBody2 = InviteUserToTeamResponseBody2{}
	if err := utils.UnmarshalJSON(data, &inviteUserToTeamResponseBody2, "", true, true); err == nil {
		u.InviteUserToTeamResponseBody2 = &inviteUserToTeamResponseBody2
		u.Type = InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody2
		return nil
	}

	var inviteUserToTeamResponseBody1 InviteUserToTeamResponseBody1 = InviteUserToTeamResponseBody1{}
	if err := utils.UnmarshalJSON(data, &inviteUserToTeamResponseBody1, "", true, true); err == nil {
		u.InviteUserToTeamResponseBody1 = &inviteUserToTeamResponseBody1
		u.Type = InviteUserToTeamResponseBodyTypeInviteUserToTeamResponseBody1
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for InviteUserToTeamResponseBody", string(data))
}

func (u InviteUserToTeamResponseBody) MarshalJSON() ([]byte, error) {
	if u.InviteUserToTeamResponseBody1 != nil {
		return utils.MarshalJSON(u.InviteUserToTeamResponseBody1, "", true)
	}

	if u.InviteUserToTeamResponseBody2 != nil {
		return utils.MarshalJSON(u.InviteUserToTeamResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type InviteUserToTeamResponseBody: all fields are null")
}

type InviteUserToTeamResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The member was successfully added to the team
	OneOf *InviteUserToTeamResponseBody
}

func (o *InviteUserToTeamResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *InviteUserToTeamResponse) GetOneOf() *InviteUserToTeamResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}
