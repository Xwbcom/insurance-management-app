package com.aurionpro.app.service;

import java.util.List;

import com.aurionpro.app.dto.AgentAssignedPolicyDTO;
import com.aurionpro.app.dto.AgentCommissionReportDto;
import com.aurionpro.app.dto.AgentEarningsDTO;
import com.aurionpro.app.dto.AgentProfileDTO;
import com.aurionpro.app.dto.AgentResponseDTO;
import com.aurionpro.app.dto.AgentUpdateRequestDTO;
import com.aurionpro.app.dto.PageResponse;

public interface AgentService {
	PageResponse<AgentResponseDTO> getPendingAgents(int pageNumber, int pageSize);
    AgentResponseDTO approveAgent(int agentId, int approverId);
    void softDeleteAgent(int id);
    List<AgentAssignedPolicyDTO> getAssignedPolicies(int agentId);
    AgentProfileDTO getProfile(int agentId);
    AgentResponseDTO rejectAgent(int agentId, int approverId);
    AgentCommissionReportDto getCommissionReport(int agentId);
    List<AgentEarningsDTO> getEarningsDetails(int agentId);
    AgentResponseDTO getAgentProfile(int agentId);
    AgentResponseDTO updateAgentProfile(int agentId, AgentUpdateRequestDTO dto);

}
