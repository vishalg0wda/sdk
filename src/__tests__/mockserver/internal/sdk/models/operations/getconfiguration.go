// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"errors"
	"fmt"
	"mockserver/internal/sdk/models/components"
	"mockserver/internal/sdk/utils"
)

type GetConfigurationRequest struct {
	// ID of the configuration to check
	ID string `pathParam:"style=simple,explode=false,name=id"`
	// The Team identifier to perform the request on behalf of.
	TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
	// The Team slug to perform the request on behalf of.
	Slug *string `queryParam:"style=form,explode=true,name=slug"`
}

func (o *GetConfigurationRequest) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetConfigurationRequest) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetConfigurationRequest) GetSlug() *string {
	if o == nil {
		return nil
	}
	return o.Slug
}

// ProjectSelection - A string representing the permission for projects. Possible values are `all` or `selected`.
type ProjectSelection string

const (
	ProjectSelectionSelected ProjectSelection = "selected"
	ProjectSelectionAll      ProjectSelection = "all"
)

func (e ProjectSelection) ToPointer() *ProjectSelection {
	return &e
}
func (e *ProjectSelection) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "selected":
		fallthrough
	case "all":
		*e = ProjectSelection(v)
		return nil
	default:
		return fmt.Errorf("invalid value for ProjectSelection: %v", v)
	}
}

// GetConfigurationResponseBodyIntegrationsSource - Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
type GetConfigurationResponseBodyIntegrationsSource string

const (
	GetConfigurationResponseBodyIntegrationsSourceMarketplace  GetConfigurationResponseBodyIntegrationsSource = "marketplace"
	GetConfigurationResponseBodyIntegrationsSourceDeployButton GetConfigurationResponseBodyIntegrationsSource = "deploy-button"
	GetConfigurationResponseBodyIntegrationsSourceExternal     GetConfigurationResponseBodyIntegrationsSource = "external"
)

func (e GetConfigurationResponseBodyIntegrationsSource) ToPointer() *GetConfigurationResponseBodyIntegrationsSource {
	return &e
}
func (e *GetConfigurationResponseBodyIntegrationsSource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "marketplace":
		fallthrough
	case "deploy-button":
		fallthrough
	case "external":
		*e = GetConfigurationResponseBodyIntegrationsSource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyIntegrationsSource: %v", v)
	}
}

type GetConfigurationResponseBodyIntegrationsType string

const (
	GetConfigurationResponseBodyIntegrationsTypeIntegrationConfiguration GetConfigurationResponseBodyIntegrationsType = "integration-configuration"
)

func (e GetConfigurationResponseBodyIntegrationsType) ToPointer() *GetConfigurationResponseBodyIntegrationsType {
	return &e
}
func (e *GetConfigurationResponseBodyIntegrationsType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "integration-configuration":
		*e = GetConfigurationResponseBodyIntegrationsType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyIntegrationsType: %v", v)
	}
}

type GetConfigurationResponseBodyIntegrationsDisabledReason string

const (
	GetConfigurationResponseBodyIntegrationsDisabledReasonDisabledByOwner             GetConfigurationResponseBodyIntegrationsDisabledReason = "disabled-by-owner"
	GetConfigurationResponseBodyIntegrationsDisabledReasonFeatureNotAvailable         GetConfigurationResponseBodyIntegrationsDisabledReason = "feature-not-available"
	GetConfigurationResponseBodyIntegrationsDisabledReasonDisabledByAdmin             GetConfigurationResponseBodyIntegrationsDisabledReason = "disabled-by-admin"
	GetConfigurationResponseBodyIntegrationsDisabledReasonOriginalOwnerLeftTheTeam    GetConfigurationResponseBodyIntegrationsDisabledReason = "original-owner-left-the-team"
	GetConfigurationResponseBodyIntegrationsDisabledReasonAccountPlanDowngrade        GetConfigurationResponseBodyIntegrationsDisabledReason = "account-plan-downgrade"
	GetConfigurationResponseBodyIntegrationsDisabledReasonOriginalOwnerRoleDowngraded GetConfigurationResponseBodyIntegrationsDisabledReason = "original-owner-role-downgraded"
)

func (e GetConfigurationResponseBodyIntegrationsDisabledReason) ToPointer() *GetConfigurationResponseBodyIntegrationsDisabledReason {
	return &e
}
func (e *GetConfigurationResponseBodyIntegrationsDisabledReason) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "disabled-by-owner":
		fallthrough
	case "feature-not-available":
		fallthrough
	case "disabled-by-admin":
		fallthrough
	case "original-owner-left-the-team":
		fallthrough
	case "account-plan-downgrade":
		fallthrough
	case "original-owner-role-downgraded":
		*e = GetConfigurationResponseBodyIntegrationsDisabledReason(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyIntegrationsDisabledReason: %v", v)
	}
}

// GetConfigurationResponseBodyIntegrationsInstallationType - Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
type GetConfigurationResponseBodyIntegrationsInstallationType string

const (
	GetConfigurationResponseBodyIntegrationsInstallationTypeMarketplace GetConfigurationResponseBodyIntegrationsInstallationType = "marketplace"
	GetConfigurationResponseBodyIntegrationsInstallationTypeExternal    GetConfigurationResponseBodyIntegrationsInstallationType = "external"
)

func (e GetConfigurationResponseBodyIntegrationsInstallationType) ToPointer() *GetConfigurationResponseBodyIntegrationsInstallationType {
	return &e
}
func (e *GetConfigurationResponseBodyIntegrationsInstallationType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "marketplace":
		fallthrough
	case "external":
		*e = GetConfigurationResponseBodyIntegrationsInstallationType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyIntegrationsInstallationType: %v", v)
	}
}

type GetConfigurationResponseBody2 struct {
	// A string representing the permission for projects. Possible values are `all` or `selected`.
	ProjectSelection ProjectSelection `json:"projectSelection"`
	// When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.
	Projects []string `json:"projects,omitempty"`
	// A timestamp that tells you when the configuration was installed successfully
	CompletedAt *float64 `json:"completedAt,omitempty"`
	// A timestamp that tells you when the configuration was created
	CreatedAt float64 `json:"createdAt"`
	// The unique identifier of the configuration
	ID string `json:"id"`
	// The unique identifier of the app the configuration was created for
	IntegrationID string `json:"integrationId"`
	// The user or team ID that owns the configuration
	OwnerID string `json:"ownerId"`
	// Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
	Source *GetConfigurationResponseBodyIntegrationsSource `json:"source,omitempty"`
	// The slug of the integration the configuration is created for.
	Slug string `json:"slug"`
	// When the configuration was created for a team, this will show the ID of the team.
	TeamID *string                                      `json:"teamId,omitempty"`
	Type   GetConfigurationResponseBodyIntegrationsType `json:"type"`
	// A timestamp that tells you when the configuration was updated.
	UpdatedAt float64 `json:"updatedAt"`
	// The ID of the user that created the configuration.
	UserID string `json:"userId"`
	// The resources that are allowed to be accessed by the configuration.
	Scopes []string `json:"scopes"`
	// A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	// A timestamp that tells you when the configuration was deleted.
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	// A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.
	DeleteRequestedAt *float64                                                `json:"deleteRequestedAt,omitempty"`
	DisabledReason    *GetConfigurationResponseBodyIntegrationsDisabledReason `json:"disabledReason,omitempty"`
	// Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
	InstallationType          *GetConfigurationResponseBodyIntegrationsInstallationType `json:"installationType,omitempty"`
	CanConfigureOpenTelemetry *bool                                                     `json:"canConfigureOpenTelemetry,omitempty"`
}

func (o *GetConfigurationResponseBody2) GetProjectSelection() ProjectSelection {
	if o == nil {
		return ProjectSelection("")
	}
	return o.ProjectSelection
}

func (o *GetConfigurationResponseBody2) GetProjects() []string {
	if o == nil {
		return nil
	}
	return o.Projects
}

func (o *GetConfigurationResponseBody2) GetCompletedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CompletedAt
}

func (o *GetConfigurationResponseBody2) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *GetConfigurationResponseBody2) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetConfigurationResponseBody2) GetIntegrationID() string {
	if o == nil {
		return ""
	}
	return o.IntegrationID
}

func (o *GetConfigurationResponseBody2) GetOwnerID() string {
	if o == nil {
		return ""
	}
	return o.OwnerID
}

func (o *GetConfigurationResponseBody2) GetSource() *GetConfigurationResponseBodyIntegrationsSource {
	if o == nil {
		return nil
	}
	return o.Source
}

func (o *GetConfigurationResponseBody2) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *GetConfigurationResponseBody2) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetConfigurationResponseBody2) GetType() GetConfigurationResponseBodyIntegrationsType {
	if o == nil {
		return GetConfigurationResponseBodyIntegrationsType("")
	}
	return o.Type
}

func (o *GetConfigurationResponseBody2) GetUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.UpdatedAt
}

func (o *GetConfigurationResponseBody2) GetUserID() string {
	if o == nil {
		return ""
	}
	return o.UserID
}

func (o *GetConfigurationResponseBody2) GetScopes() []string {
	if o == nil {
		return []string{}
	}
	return o.Scopes
}

func (o *GetConfigurationResponseBody2) GetDisabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DisabledAt
}

func (o *GetConfigurationResponseBody2) GetDeletedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DeletedAt
}

func (o *GetConfigurationResponseBody2) GetDeleteRequestedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DeleteRequestedAt
}

func (o *GetConfigurationResponseBody2) GetDisabledReason() *GetConfigurationResponseBodyIntegrationsDisabledReason {
	if o == nil {
		return nil
	}
	return o.DisabledReason
}

func (o *GetConfigurationResponseBody2) GetInstallationType() *GetConfigurationResponseBodyIntegrationsInstallationType {
	if o == nil {
		return nil
	}
	return o.InstallationType
}

func (o *GetConfigurationResponseBody2) GetCanConfigureOpenTelemetry() *bool {
	if o == nil {
		return nil
	}
	return o.CanConfigureOpenTelemetry
}

type GetConfigurationResponseBodyIntegrationsResponseType string

const (
	GetConfigurationResponseBodyIntegrationsResponseTypePrepayment   GetConfigurationResponseBodyIntegrationsResponseType = "prepayment"
	GetConfigurationResponseBodyIntegrationsResponseTypeSubscription GetConfigurationResponseBodyIntegrationsResponseType = "subscription"
)

func (e GetConfigurationResponseBodyIntegrationsResponseType) ToPointer() *GetConfigurationResponseBodyIntegrationsResponseType {
	return &e
}
func (e *GetConfigurationResponseBodyIntegrationsResponseType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "prepayment":
		fallthrough
	case "subscription":
		*e = GetConfigurationResponseBodyIntegrationsResponseType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyIntegrationsResponseType: %v", v)
	}
}

type GetConfigurationResponseBodyScope string

const (
	GetConfigurationResponseBodyScopeInstallation GetConfigurationResponseBodyScope = "installation"
	GetConfigurationResponseBodyScopeResource     GetConfigurationResponseBodyScope = "resource"
)

func (e GetConfigurationResponseBodyScope) ToPointer() *GetConfigurationResponseBodyScope {
	return &e
}
func (e *GetConfigurationResponseBodyScope) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "installation":
		fallthrough
	case "resource":
		*e = GetConfigurationResponseBodyScope(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyScope: %v", v)
	}
}

type GetConfigurationResponseBodyDetails struct {
	Label string  `json:"label"`
	Value *string `json:"value,omitempty"`
}

func (o *GetConfigurationResponseBodyDetails) GetLabel() string {
	if o == nil {
		return ""
	}
	return o.Label
}

func (o *GetConfigurationResponseBodyDetails) GetValue() *string {
	if o == nil {
		return nil
	}
	return o.Value
}

type GetConfigurationResponseBodyHeightlightedDetails struct {
	Label string  `json:"label"`
	Value *string `json:"value,omitempty"`
}

func (o *GetConfigurationResponseBodyHeightlightedDetails) GetLabel() string {
	if o == nil {
		return ""
	}
	return o.Label
}

func (o *GetConfigurationResponseBodyHeightlightedDetails) GetValue() *string {
	if o == nil {
		return nil
	}
	return o.Value
}

type GetConfigurationResponseBodyQuote struct {
	Line   string `json:"line"`
	Amount string `json:"amount"`
}

func (o *GetConfigurationResponseBodyQuote) GetLine() string {
	if o == nil {
		return ""
	}
	return o.Line
}

func (o *GetConfigurationResponseBodyQuote) GetAmount() string {
	if o == nil {
		return ""
	}
	return o.Amount
}

type GetConfigurationResponseBodyBillingPlan struct {
	ID                     string                                               `json:"id"`
	Type                   GetConfigurationResponseBodyIntegrationsResponseType `json:"type"`
	Name                   string                                               `json:"name"`
	Scope                  *GetConfigurationResponseBodyScope                   `json:"scope,omitempty"`
	Description            string                                               `json:"description"`
	PaymentMethodRequired  *bool                                                `json:"paymentMethodRequired,omitempty"`
	PreauthorizationAmount *float64                                             `json:"preauthorizationAmount,omitempty"`
	Cost                   *string                                              `json:"cost,omitempty"`
	Details                []GetConfigurationResponseBodyDetails                `json:"details,omitempty"`
	HeightlightedDetails   []GetConfigurationResponseBodyHeightlightedDetails   `json:"heightlightedDetails,omitempty"`
	Quote                  []GetConfigurationResponseBodyQuote                  `json:"quote,omitempty"`
	EffectiveDate          *string                                              `json:"effectiveDate,omitempty"`
}

func (o *GetConfigurationResponseBodyBillingPlan) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetConfigurationResponseBodyBillingPlan) GetType() GetConfigurationResponseBodyIntegrationsResponseType {
	if o == nil {
		return GetConfigurationResponseBodyIntegrationsResponseType("")
	}
	return o.Type
}

func (o *GetConfigurationResponseBodyBillingPlan) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *GetConfigurationResponseBodyBillingPlan) GetScope() *GetConfigurationResponseBodyScope {
	if o == nil {
		return nil
	}
	return o.Scope
}

func (o *GetConfigurationResponseBodyBillingPlan) GetDescription() string {
	if o == nil {
		return ""
	}
	return o.Description
}

func (o *GetConfigurationResponseBodyBillingPlan) GetPaymentMethodRequired() *bool {
	if o == nil {
		return nil
	}
	return o.PaymentMethodRequired
}

func (o *GetConfigurationResponseBodyBillingPlan) GetPreauthorizationAmount() *float64 {
	if o == nil {
		return nil
	}
	return o.PreauthorizationAmount
}

func (o *GetConfigurationResponseBodyBillingPlan) GetCost() *string {
	if o == nil {
		return nil
	}
	return o.Cost
}

func (o *GetConfigurationResponseBodyBillingPlan) GetDetails() []GetConfigurationResponseBodyDetails {
	if o == nil {
		return nil
	}
	return o.Details
}

func (o *GetConfigurationResponseBodyBillingPlan) GetHeightlightedDetails() []GetConfigurationResponseBodyHeightlightedDetails {
	if o == nil {
		return nil
	}
	return o.HeightlightedDetails
}

func (o *GetConfigurationResponseBodyBillingPlan) GetQuote() []GetConfigurationResponseBodyQuote {
	if o == nil {
		return nil
	}
	return o.Quote
}

func (o *GetConfigurationResponseBodyBillingPlan) GetEffectiveDate() *string {
	if o == nil {
		return nil
	}
	return o.EffectiveDate
}

// GetConfigurationResponseBodySource - Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
type GetConfigurationResponseBodySource string

const (
	GetConfigurationResponseBodySourceMarketplace  GetConfigurationResponseBodySource = "marketplace"
	GetConfigurationResponseBodySourceDeployButton GetConfigurationResponseBodySource = "deploy-button"
	GetConfigurationResponseBodySourceExternal     GetConfigurationResponseBodySource = "external"
)

func (e GetConfigurationResponseBodySource) ToPointer() *GetConfigurationResponseBodySource {
	return &e
}
func (e *GetConfigurationResponseBodySource) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "marketplace":
		fallthrough
	case "deploy-button":
		fallthrough
	case "external":
		*e = GetConfigurationResponseBodySource(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodySource: %v", v)
	}
}

type GetConfigurationResponseBodyType string

const (
	GetConfigurationResponseBodyTypeIntegrationConfiguration GetConfigurationResponseBodyType = "integration-configuration"
)

func (e GetConfigurationResponseBodyType) ToPointer() *GetConfigurationResponseBodyType {
	return &e
}
func (e *GetConfigurationResponseBodyType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "integration-configuration":
		*e = GetConfigurationResponseBodyType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyType: %v", v)
	}
}

type GetConfigurationResponseBodyDisabledReason string

const (
	GetConfigurationResponseBodyDisabledReasonDisabledByOwner             GetConfigurationResponseBodyDisabledReason = "disabled-by-owner"
	GetConfigurationResponseBodyDisabledReasonFeatureNotAvailable         GetConfigurationResponseBodyDisabledReason = "feature-not-available"
	GetConfigurationResponseBodyDisabledReasonDisabledByAdmin             GetConfigurationResponseBodyDisabledReason = "disabled-by-admin"
	GetConfigurationResponseBodyDisabledReasonOriginalOwnerLeftTheTeam    GetConfigurationResponseBodyDisabledReason = "original-owner-left-the-team"
	GetConfigurationResponseBodyDisabledReasonAccountPlanDowngrade        GetConfigurationResponseBodyDisabledReason = "account-plan-downgrade"
	GetConfigurationResponseBodyDisabledReasonOriginalOwnerRoleDowngraded GetConfigurationResponseBodyDisabledReason = "original-owner-role-downgraded"
)

func (e GetConfigurationResponseBodyDisabledReason) ToPointer() *GetConfigurationResponseBodyDisabledReason {
	return &e
}
func (e *GetConfigurationResponseBodyDisabledReason) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "disabled-by-owner":
		fallthrough
	case "feature-not-available":
		fallthrough
	case "disabled-by-admin":
		fallthrough
	case "original-owner-left-the-team":
		fallthrough
	case "account-plan-downgrade":
		fallthrough
	case "original-owner-role-downgraded":
		*e = GetConfigurationResponseBodyDisabledReason(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyDisabledReason: %v", v)
	}
}

// GetConfigurationResponseBodyInstallationType - Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
type GetConfigurationResponseBodyInstallationType string

const (
	GetConfigurationResponseBodyInstallationTypeMarketplace GetConfigurationResponseBodyInstallationType = "marketplace"
	GetConfigurationResponseBodyInstallationTypeExternal    GetConfigurationResponseBodyInstallationType = "external"
)

func (e GetConfigurationResponseBodyInstallationType) ToPointer() *GetConfigurationResponseBodyInstallationType {
	return &e
}
func (e *GetConfigurationResponseBodyInstallationType) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "marketplace":
		fallthrough
	case "external":
		*e = GetConfigurationResponseBodyInstallationType(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetConfigurationResponseBodyInstallationType: %v", v)
	}
}

// GetConfigurationResponseBody1 - The configuration with the provided id
type GetConfigurationResponseBody1 struct {
	BillingPlan  *GetConfigurationResponseBodyBillingPlan `json:"billingPlan,omitempty"`
	BillingTotal *string                                  `json:"billingTotal,omitempty"`
	PeriodStart  *string                                  `json:"periodStart,omitempty"`
	PeriodEnd    *string                                  `json:"periodEnd,omitempty"`
	// A timestamp that tells you when the configuration was installed successfully
	CompletedAt *float64 `json:"completedAt,omitempty"`
	// A timestamp that tells you when the configuration was created
	CreatedAt float64 `json:"createdAt"`
	// The unique identifier of the configuration
	ID string `json:"id"`
	// The unique identifier of the app the configuration was created for
	IntegrationID string `json:"integrationId"`
	// The user or team ID that owns the configuration
	OwnerID string `json:"ownerId"`
	// When a configuration is limited to access certain projects, this will contain each of the project ID it is allowed to access. If it is not defined, the configuration has full access.
	Projects []string `json:"projects,omitempty"`
	// Source defines where the configuration was installed from. It is used to analyze user engagement for integration installations in product metrics.
	Source *GetConfigurationResponseBodySource `json:"source,omitempty"`
	// The slug of the integration the configuration is created for.
	Slug string `json:"slug"`
	// When the configuration was created for a team, this will show the ID of the team.
	TeamID *string                          `json:"teamId,omitempty"`
	Type   GetConfigurationResponseBodyType `json:"type"`
	// A timestamp that tells you when the configuration was updated.
	UpdatedAt float64 `json:"updatedAt"`
	// The ID of the user that created the configuration.
	UserID string `json:"userId"`
	// The resources that are allowed to be accessed by the configuration.
	Scopes []string `json:"scopes"`
	// A timestamp that tells you when the configuration was disabled. Note: Configurations can be disabled when the associated user loses access to a team. They do not function during this time until the configuration is 'transferred', meaning the associated user is changed to one with access to the team.
	DisabledAt *float64 `json:"disabledAt,omitempty"`
	// A timestamp that tells you when the configuration was deleted.
	DeletedAt *float64 `json:"deletedAt,omitempty"`
	// A timestamp that tells you when the configuration deletion has been started for cases when the deletion needs to be settled/approved by partners, such as when marketplace invoices have been paid.
	DeleteRequestedAt *float64                                    `json:"deleteRequestedAt,omitempty"`
	DisabledReason    *GetConfigurationResponseBodyDisabledReason `json:"disabledReason,omitempty"`
	// Defines the installation type. - 'external' integrations are installed via the existing integrations flow - 'marketplace' integrations are natively installed: - when accepting the TOS of a partner during the store creation process - if undefined, assume 'external'
	InstallationType *GetConfigurationResponseBodyInstallationType `json:"installationType,omitempty"`
}

func (o *GetConfigurationResponseBody1) GetBillingPlan() *GetConfigurationResponseBodyBillingPlan {
	if o == nil {
		return nil
	}
	return o.BillingPlan
}

func (o *GetConfigurationResponseBody1) GetBillingTotal() *string {
	if o == nil {
		return nil
	}
	return o.BillingTotal
}

func (o *GetConfigurationResponseBody1) GetPeriodStart() *string {
	if o == nil {
		return nil
	}
	return o.PeriodStart
}

func (o *GetConfigurationResponseBody1) GetPeriodEnd() *string {
	if o == nil {
		return nil
	}
	return o.PeriodEnd
}

func (o *GetConfigurationResponseBody1) GetCompletedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.CompletedAt
}

func (o *GetConfigurationResponseBody1) GetCreatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.CreatedAt
}

func (o *GetConfigurationResponseBody1) GetID() string {
	if o == nil {
		return ""
	}
	return o.ID
}

func (o *GetConfigurationResponseBody1) GetIntegrationID() string {
	if o == nil {
		return ""
	}
	return o.IntegrationID
}

func (o *GetConfigurationResponseBody1) GetOwnerID() string {
	if o == nil {
		return ""
	}
	return o.OwnerID
}

func (o *GetConfigurationResponseBody1) GetProjects() []string {
	if o == nil {
		return nil
	}
	return o.Projects
}

func (o *GetConfigurationResponseBody1) GetSource() *GetConfigurationResponseBodySource {
	if o == nil {
		return nil
	}
	return o.Source
}

func (o *GetConfigurationResponseBody1) GetSlug() string {
	if o == nil {
		return ""
	}
	return o.Slug
}

func (o *GetConfigurationResponseBody1) GetTeamID() *string {
	if o == nil {
		return nil
	}
	return o.TeamID
}

func (o *GetConfigurationResponseBody1) GetType() GetConfigurationResponseBodyType {
	if o == nil {
		return GetConfigurationResponseBodyType("")
	}
	return o.Type
}

func (o *GetConfigurationResponseBody1) GetUpdatedAt() float64 {
	if o == nil {
		return 0.0
	}
	return o.UpdatedAt
}

func (o *GetConfigurationResponseBody1) GetUserID() string {
	if o == nil {
		return ""
	}
	return o.UserID
}

func (o *GetConfigurationResponseBody1) GetScopes() []string {
	if o == nil {
		return []string{}
	}
	return o.Scopes
}

func (o *GetConfigurationResponseBody1) GetDisabledAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DisabledAt
}

func (o *GetConfigurationResponseBody1) GetDeletedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DeletedAt
}

func (o *GetConfigurationResponseBody1) GetDeleteRequestedAt() *float64 {
	if o == nil {
		return nil
	}
	return o.DeleteRequestedAt
}

func (o *GetConfigurationResponseBody1) GetDisabledReason() *GetConfigurationResponseBodyDisabledReason {
	if o == nil {
		return nil
	}
	return o.DisabledReason
}

func (o *GetConfigurationResponseBody1) GetInstallationType() *GetConfigurationResponseBodyInstallationType {
	if o == nil {
		return nil
	}
	return o.InstallationType
}

type GetConfigurationResponseBodyUnionType string

const (
	GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody1 GetConfigurationResponseBodyUnionType = "getConfiguration_responseBody_1"
	GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody2 GetConfigurationResponseBodyUnionType = "getConfiguration_responseBody_2"
)

// GetConfigurationResponseBody - The configuration with the provided id
type GetConfigurationResponseBody struct {
	GetConfigurationResponseBody1 *GetConfigurationResponseBody1
	GetConfigurationResponseBody2 *GetConfigurationResponseBody2

	Type GetConfigurationResponseBodyUnionType
}

func CreateGetConfigurationResponseBodyGetConfigurationResponseBody1(getConfigurationResponseBody1 GetConfigurationResponseBody1) GetConfigurationResponseBody {
	typ := GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody1

	return GetConfigurationResponseBody{
		GetConfigurationResponseBody1: &getConfigurationResponseBody1,
		Type:                          typ,
	}
}

func CreateGetConfigurationResponseBodyGetConfigurationResponseBody2(getConfigurationResponseBody2 GetConfigurationResponseBody2) GetConfigurationResponseBody {
	typ := GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody2

	return GetConfigurationResponseBody{
		GetConfigurationResponseBody2: &getConfigurationResponseBody2,
		Type:                          typ,
	}
}

func (u *GetConfigurationResponseBody) UnmarshalJSON(data []byte) error {

	var getConfigurationResponseBody2 GetConfigurationResponseBody2 = GetConfigurationResponseBody2{}
	if err := utils.UnmarshalJSON(data, &getConfigurationResponseBody2, "", true, true); err == nil {
		u.GetConfigurationResponseBody2 = &getConfigurationResponseBody2
		u.Type = GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody2
		return nil
	}

	var getConfigurationResponseBody1 GetConfigurationResponseBody1 = GetConfigurationResponseBody1{}
	if err := utils.UnmarshalJSON(data, &getConfigurationResponseBody1, "", true, true); err == nil {
		u.GetConfigurationResponseBody1 = &getConfigurationResponseBody1
		u.Type = GetConfigurationResponseBodyUnionTypeGetConfigurationResponseBody1
		return nil
	}

	return fmt.Errorf("could not unmarshal `%s` into any supported union types for GetConfigurationResponseBody", string(data))
}

func (u GetConfigurationResponseBody) MarshalJSON() ([]byte, error) {
	if u.GetConfigurationResponseBody1 != nil {
		return utils.MarshalJSON(u.GetConfigurationResponseBody1, "", true)
	}

	if u.GetConfigurationResponseBody2 != nil {
		return utils.MarshalJSON(u.GetConfigurationResponseBody2, "", true)
	}

	return nil, errors.New("could not marshal union type GetConfigurationResponseBody: all fields are null")
}

type GetConfigurationResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// The configuration with the provided id
	OneOf *GetConfigurationResponseBody
}

func (o *GetConfigurationResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *GetConfigurationResponse) GetOneOf() *GetConfigurationResponseBody {
	if o == nil {
		return nil
	}
	return o.OneOf
}
